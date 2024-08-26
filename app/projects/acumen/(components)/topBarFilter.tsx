import { Label } from "@aws-amplify/ui-react"
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useFilter } from '../context/FilterContext';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function TopBarFilter() {

    const { dataFilters, trafficDirection, aggregationLevel, dispatch } = useFilter();
    return (
        <div className="flex items-center gap-4">
            Traffic:
            <Select value={trafficDirection} onValueChange={(e) => dispatch({ type: "SetTrafficDirection", payload: { trafficDirection: e } })}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Traffic Direction" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Traffic Direction</SelectLabel>
                        <SelectItem value="both">Both Directions</SelectItem>
                        <SelectItem value="egress">eGress</SelectItem>
                        <SelectItem value="ingress">inGress</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className="hidden md:block">
                <Select value={aggregationLevel} onValueChange={(e) => dispatch({ type: "SetAggregation", payload: { aggregationLevel: e } })}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Aggregation level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Aggregation Level</SelectLabel>
                            <SelectItem value="Service Level">Service Level</SelectItem>
                            <SelectItem value="IP Level">IP Level</SelectItem>
                            <SelectItem value="Detailed">Detailed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </ div>
        </div>
    )
}