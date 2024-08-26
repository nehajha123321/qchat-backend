"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ipRangeCheck from "ip-range-check";
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type details = {
  ip_prefix: string;
  region: string;
  service: string;
  network_border_group: string;
} | undefined

export default function Page() {
  const [ipAddress, setIpAddress] = useState("");
  const [ipRanges, setIpRanges] = useState<any>()
  const [regions, setRegions] = useState<any>()
  const [services, setServices] = useState<any>()
  const [selectedRegion, setSelectedRegion] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [ipRangesFiltered, setIpRangesFiltered] = useState<any>()



  useEffect(function () {
    const ipRanges = fetchIpRanges()
  }, [])

  // URL to fetch the AWS IP ranges JSON file
  const ipRangesUrl = 'https://ip-ranges.amazonaws.com/ip-ranges.json';

  // Function to fetch the IP ranges JSON file
  async function fetchIpRanges() {
    try {
      const response = await axios.get(ipRangesUrl);
      const data: any[] = response.data.prefixes
      setIpRanges(data)

      let tmpServices: any[] = [];
      let tmpRegions: any[] = [];

      data?.forEach((item: any) => {
        if (!tmpServices.includes(item.service)) {
          tmpServices.push(item.service);
        }
        if (!tmpRegions.includes(item.region)) {
          tmpRegions.push(item.region);
        }
      })

      //Sort the two arrays
      setServices(tmpServices.sort(
        (a, b) => a.localeCompare(b)
      ));

      setRegions(tmpRegions.sort(
        (a, b) => a.localeCompare(b)
      ));

      return response.data.prefixes;
    } catch (error) {
      console.error('Error fetching IP ranges:', error);
      return null;
    }
  }

  function handleSumbit() {
    handleClearRegionService()
    const details = findIpRangeDetails(ipAddress)
  }

  function handleClear() {
    setIpAddress("")
    setIpRangesFiltered([]);
  }

  function handleSumbitRegionService() {
    handleClear()
    let filteredData = []
    filteredData = ipRanges.filter((item: any) => {
      if (selectedRegion && selectedService) {
        return item.region === selectedRegion && item.service === selectedService;
      } else if (selectedRegion) {
        return item.region === selectedRegion;
      } else if (selectedService) {
        return item.service === selectedService;
      }
      return true;
    });
    setIpRangesFiltered(filteredData);

  }

  function handleClearRegionService() {
    setSelectedRegion("");
    setSelectedService("");
    setIpRangesFiltered([]);
  }

  // Function to find the IP range and details for a given IP address
  function findIpRangeDetails(ipAddress) {
    let filteredData = []
    filteredData = ipRanges.filter((item: any) => {
      return ipRangeCheck(ipAddress, item.ip_prefix)
    });
    setIpRangesFiltered(filteredData);
  }

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <h1 className="text-white text-xl font-bold md:text-4xl md:font-extrabold md:tracking-tight p-4">
          AWS IP Range Details
        </h1>
      </div>
      <div className="grow bg-blue-100 mt-4 rounded-lg">
        <div className="flex grow min-w-32 flex-1 w-full">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-blue-200  px-6 py-10 md:px-20 w-full m-1 ml-0">
            <h1 className="text-xl">Check AWS Service and Region for the provided IP Address:</h1>
            <Input type="text" placeholder="Enter IP Address..." value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
            <div className="flex flex-col-2 w-full gap-6 ">
              <Button variant="default" onClick={handleSumbit} disabled={ipAddress == ""}>Submit</Button>
              <Button variant="secondary" onClick={handleClear}>Clear</Button>
            </div>
          </div>

        </div>
        <div className="flex grow min-w-32 flex-1 w-full">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-blue-200  px-6 py-10 md:px-20 w-full m-1 ml-0">
            <h1 className="text-xl">Filter IP Range by Region and Service</h1>
            <div className="flex flex-col-2 w-full gap-6 ">

              <Select value={selectedRegion} onValueChange={(e) => setSelectedRegion(e)}>
                <SelectTrigger className="w-[250px]">
                  <SelectValue placeholder="Select a Region..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Regions</SelectLabel>
                    {regions?.map((region) => <SelectItem key={region} value={region}>{region}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select value={selectedService} onValueChange={(e) => setSelectedService(e)}>
                <SelectTrigger className="w-[300px]">
                  <SelectValue placeholder="Select AWS Service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    {services?.map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col-2 w-full gap-6 ">
              <Button variant="default" onClick={handleSumbitRegionService} disabled={selectedRegion == "" && selectedService == ""}>Submit</Button>
              <Button variant="secondary" onClick={handleClearRegionService}>Clear</Button>
            </div>
          </div>
        </div>
        <div className={` ${ipRangesFiltered ? "block" : "hidden"} flex flex-col justify-center gap-6 rounded-lg bg-blue-200 px-6 py-10 md:px-20 w-full m-1 ml-0`}>
          <table>
            <thead>

              <tr className="text-left">
                <th>IP Prefix</th>
                <th>AWS Region</th>
                <th>AWS Service</th>
                <th>AWS Network Border Group</th>
              </tr>
            </thead>
            <tbody>
              {ipRangesFiltered?.map((item: any) => (
                <tr key={item.ip_prefix + "-" + item.service}>
                  <td>{item.ip_prefix}</td>
                  <td>{item.region}</td>
                  <td>{item.service}</td>
                  <td>{item.network_border_group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}