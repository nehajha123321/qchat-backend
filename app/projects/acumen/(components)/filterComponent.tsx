import React, { useState } from 'react';
import { Label } from "@aws-amplify/ui-react"
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { InformationCircleIcon, MinusCircleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { useFilter } from '../context/FilterContext';
import { SelectLabel } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const fields = [
    'aggregation_level', 'source_ip', 'destination_ip', 'packet_source_ip',
    'packet_destination_ip', 'subnet_id', 'flow_direction', 'source_service',
    'destination_service', 'traffic_path', 'total_bytes', 'total_packets',
    'gateway_type', 'traffic_path_descr'
];

function FilterComponent() {
    const [filterValue, setFilterValue] = useState<any>({
        sourceIP: "",
        destinationIP: "",
        portNumber: 0,
        traffic_direction: "both",
        aggregation_level: "1",
        trafficPath: 0,
        aws_service: ""
    });

    const { dataFilters, trafficDirection, dispatch } = useFilter();

    const { sourceIP, destinationIP, portNumber, traffic_direction, trafficPath, aws_service } = filterValue

    const [filters, setFilters] = useState<any>(dataFilters || []);

    const handleAddFilter = (type, field, defaultValue) => {
        //check for blank value in field
        if (filterValue[field] === "" || filterValue[field] == 0)
            return;

        const newFilter = { field: field, value: filterValue[field], type: type };
        setFilters([...filters, newFilter]);
        setFilterValue({ ...filterValue, [field]: defaultValue }); // Clear the input after adding
    };

    const handleDeleteFilter = (index) => {
        const newFilters = filters.filter((_, i) => i !== index);
        setFilters(newFilters);
    };

    const handleApplyFilters = () => {
        console.log('Applying filters:', filters);
        dispatch({ type: "SETFILTERS", payload: { dataFilters: filters } })
        //setParentFilters(filters);
        // Here you would call the filtering function with the filters
    };

    return (
        <div>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-1 w-full">
                    <Label className="text-right">
                        Source IP Address:
                    </Label>
                    <div className="grid grid-cols-4 items-center gap-1 mb-2">
                        <div className="col-span-3">
                            <Input type="text" className="" value={sourceIP} onChange={(e) => setFilterValue({ ...filterValue, "sourceIP": e.target.value })} />
                        </div>
                        <div className="col-span-1 flex gap-1">
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('include', "sourceIP", "")}><PlusCircleIcon className='w-6' /></Button>
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('exclude', "sourceIP", "")}><MinusCircleIcon className='w-6' /></Button>
                        </div>
                    </div>

                    <Label className="text-right">
                        Destination IP Address:
                    </Label>
                    <div className="grid grid-cols-4 items-center gap-1 mb-2">
                        <div className="col-span-3">
                            <Input type="text" className="" value={destinationIP} onChange={(e) => setFilterValue({ ...filterValue, "destinationIP": e.target.value })} />
                        </div>
                        <div className="col-span-1 flex gap-1">
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('include', "destinationIP", "")}><PlusCircleIcon className='w-6' /></Button>
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('exclude', "destinationIP", "")}><MinusCircleIcon className='w-6' /></Button>
                        </div>
                    </div>

                    <Label className="text-right">
                        Port Number:
                    </Label>
                    <div className="grid grid-cols-4 items-center gap-1 mb-2">
                        <div className="col-span-3">
                            <Input type="number" className="" value={portNumber} onChange={(e) => setFilterValue({ ...filterValue, "portNumber": e.target.value })} />
                        </div>
                        <div className="col-span-1 flex gap-1">
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('include', "portNumber", 0)}><PlusCircleIcon className='w-6' /></Button>
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('exclude', "portNumber", 0)}><MinusCircleIcon className='w-6' /></Button>
                        </div>
                    </div>

                    <Label className="text-right">
                        Traffic Path:
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><InformationCircleIcon className='w-6' /></TooltipTrigger>
                                <TooltipContent>
                                    <pre className='word-wrap: break-word; white-space: pre-wrap; margin: 0 !important;'>{
                                        `The possible values are as follows: 
    If none of the values apply, the field is set to -.

    1 — Through another resource in the same VPC, including 
        resources that create a network interface in the VPC
    2 — Through an internet gateway or a gateway VPC endpoint
    3 — Through a virtual private gateway
    4 — Through an intra-region VPC peering connection
    5 — Through an inter-region VPC peering connection
    6 — Through a local gateway
    7 — Through a gateway VPC endpoint (Nitro-based instances only)
    8 — Through an internet gateway (Nitro-based instances only)`}
                                    </pre>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </Label>
                    <div className="grid grid-cols-4 items-center gap-1 mb-2">
                        <div className="col-span-3">
                            <Input type="number" className="" value={trafficPath} onChange={(e) => setFilterValue({ ...filterValue, "trafficPath": e.target.value })} />
                        </div>
                        <div className="col-span-1 flex gap-1">
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('include', "trafficPath", 0)}><PlusCircleIcon className='w-6' /></Button>
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('exclude', "trafficPath", 0)}><MinusCircleIcon className='w-6' /></Button>
                        </div>
                    </div>

                    <Label className="text-right">
                        AWS Service:
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><InformationCircleIcon className='w-6' /></TooltipTrigger>
                                <TooltipContent>
                                    <pre className='word-wrap: break-word; white-space: pre-wrap; margin: 0 !important;'>{
                                        `The possible values are: 
AMAZON | AMAZON_APPFLOW | AMAZON_CONNECT | API_GATEWAY | CHIME_MEETINGS | 
CHIME_VOICECONNECTOR | CLOUD9 | CLOUDFRONT | CODEBUILD | DYNAMODB | EBS | 
EC2 | EC2_INSTANCE_CONNECT | GLOBALACCELERATOR | KINESIS_VIDEO_STREAMS | 
ROUTE53 | ROUTE53_HEALTHCHECKS | ROUTE53_HEALTHCHECKS_PUBLISHING | 
ROUTE53_RESOLVER | S3 | WORKSPACES_GATEWAYS.`
                                    }
                                    </pre>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Label>
                    <div className="grid grid-cols-4 items-center gap-1 mb-2">
                        <div className="col-span-3">
                            <Input type="text" className="" value={aws_service} onChange={(e) => setFilterValue({ ...filterValue, "aws_service": e.target.value })} />
                        </div>
                        <div className="col-span-1 flex gap-1">
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('include', "aws_service", "")}><PlusCircleIcon className='w-6' /></Button>
                            <Button variant="link" className='px-0' onClick={() => handleAddFilter('exclude', "aws_service", "")}><MinusCircleIcon className='w-6' /></Button>
                        </div>
                    </div>
                </div>
                <Button variant="default" onClick={handleApplyFilters}>Apply Filters</Button>
                <div className="grid gap-4 py-1">
                    {/* <h2 className='text-lg'>{filters.length > 0 && "Filters Selected:"}</h2> */}
                    <ul>
                        {filters?.map((filter, index) => (
                            <li key={index} className="my-2">
                                <button onClick={() => handleDeleteFilter(index)} className='mx-4 right-0'><TrashIcon className='w-3' /></button>
                                [{filter.type.toUpperCase()}] {filter.field} := {filter.value}

                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div >
    );
}

export default FilterComponent;
