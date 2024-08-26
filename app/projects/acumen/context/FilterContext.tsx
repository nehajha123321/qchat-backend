//Write React function to create a Context for User Authentication
import * as React from 'react';
import { createContext, useContext, useReducer } from "react";
import { csvToJson } from "../(components)/csv2Json";

const initialState = {
    dataFilters: [],
    trafficDirection: "both",
    aggregationLevel: "IP Level",
    vpcFlowLogData: [],
}

const FilterContext = createContext<any>(null)


function reducer(state, action) {
    switch (action.type) {
        case 'SETFILTERS':
            return {
                ...state,
                dataFilters: action.payload.dataFilters
            }
        case 'SetTrafficDirection':
            return {
                ...state,
                trafficDirection: action.payload.trafficDirection
            }

        case 'SetAggregation':
            return {
                ...state,
                aggregationLevel: action.payload.aggregationLevel
            }

        case 'SetVpcFlowLogData':
            return {
                ...state,
                vpcFlowLogData: action.payload.vpcFlowLogData
            }

        default:
            return state
    }
}
type vpcFlowlogRecord = {
    source_ip: string,
    destination_ip: string,
    packet_source_ip: string,
    packet_destination_ip: string,
    subnet_id: string,
    flow_direction: string,
    source_service: string,
    destination_service: string,
    traffic_path: string,
    total_bytes: string,
    total_packets: string,
    aggregation_level: string,
    gateway_type: string,
    traffic_path_descr: string
}

function handleLoadData(filters: any[], trafficDirection: string, aggregationLevel: string) {
    const tmpData = csvToJson();
    const data: vpcFlowlogRecord[] = tmpData?.filter((item) => {
        return blnCheckFilterConditions(item)
    }) || []

    console.log("Filtered: " + data.length + " / " + tmpData?.length)

    function blnCheckFilterConditions(item: vpcFlowlogRecord): boolean {

        if (aggregationLevel != item.aggregation_level) {
            return false
        }

        if (trafficDirection != "both" && trafficDirection != item.flow_direction) {
            return false
        }

        // Helper function to check if the item's field value matches the filter condition
        function matchesCondition(itemValue, filter): boolean {
            if (filter.type === 'include') {
                return Array.isArray(filter.value) ? filter.value.includes(itemValue) : itemValue === filter.value;
            } else { // filter.type === 'exclude'
                return Array.isArray(filter.value) ? !filter.value.includes(itemValue) : itemValue !== filter.value;
            }
        }

        function mapFields(field: string) {
            switch (field) {
                case "sourceIP":
                    return ["source_ip", "packet_source_ip"]
                case "destinationIP":
                    return ["destination_ip", "packet_destination_ip"]
                case "portNumber":
                    return ["source_port", "destination_port"]
                case "trafficPath":
                    return ["traffic_path"]
                case "aws_service":
                    return ["source_service", "destination_service"]
                case "traffic_direction":
                    return ["flow_direction"]
                default:
                    return [field]
            }
        }



        // Apply all filters, the item must pass all conditions to return true
        return filters.every(filter => {
            // If the filter value is undefined or empty, it means no filtering is applied on this field
            if (filter.value === undefined || filter.value === '') {
                return true;
            }

            const fields: string[] = mapFields(filter.field)
            return fields.some(mappedField => {
                // Get the item's value for the field specified in the filter
                const itemValue = item[mappedField];
                return matchesCondition(itemValue, filter);
            })

        });

    }

    let edges: any[] = [];
    let nodes: any = [];
    let subnets = []
    let services = []
    let total_bytes = 0
    let tmpVal = 0


    /*  total_bytes = data.reduce((total, item) => { 
         return total + Number.parseInt(item.total_bytes)
     }, 0) */

    data?.forEach((item: vpcFlowlogRecord, index: number) => {
        //Create Edges
        edges.push({ data: { source: item.source_ip, target: item.destination_ip } })
        let tmpNode = nodes[`${item.source_ip}`];
        nodes[`${item.source_ip}`] = { data: { id: item.source_ip, label: item.source_ip, parent: (item.source_service == "VPC" ? item.subnet_id : item.source_service), size: tmpNode ? (Number.parseInt(tmpNode.data.size) + Number.parseInt(item.total_bytes)) : Number.parseInt(item.total_bytes) } }
        total_bytes += parseInt(item.total_bytes)
        tmpNode = nodes[`${item.destination_ip}`]
        nodes[`${item.destination_ip}`] = { data: { id: item.destination_ip, label: item.destination_ip, parent: (item.destination_service == "VPC" ? item.subnet_id : item.destination_service), size: tmpNode ? (Number.parseInt(tmpNode.data.size) + Number.parseInt(item.total_bytes)) : Number.parseInt(item.total_bytes) } }

        //Create Parent Nodes
        if (!nodes[`${item.subnet_id}`]) nodes[`${item.subnet_id}`] = {
            data: {
                id: item.subnet_id, label: item.subnet_id, parent: "VPC"
            }, classes: `parent-${Math.round(Math.random() * 4) + 1} subnet-parent`
            /* ,
            style: { // style property overrides 
                'background-color': `hsla(${Math.random() * 360}, 100%, 90%, 1)` //"#" + ((1 << 24) * Math.random() | 0).toString(16)
            } */
        }
        if (!nodes[`${item.source_service}`]) nodes[`${item.source_service}`] = {
            data: {
                id: item.source_service,
                label: item.source_service == "-" ? "INTERNET" : item.source_service
            }, classes: `parent-${Math.round(Math.random() * 4) + 1}`
        }
        if (!nodes[`${item.destination_service}`]) nodes[`${item.destination_service}`] = {
            data: {
                id: item.destination_service,
                label: item.destination_service == "-" ? "INTERNET" : item.destination_service
            }, classes: `parent-${Math.round(Math.random() * 4) + 1}`
        }

    })

    let tmpValNodes = {}
    const finalNodes = Object.keys(nodes).map((item) => {
        tmpVal = 0
        if (nodes[item].data.size) {
            tmpVal = Math.round(nodes[item].data.size * 9 / total_bytes) + 1
            /* if (tmpVal > 50) {
                nodes[item].style = { label: "ABC", width: 50, height: 50, fontSize: '64px' }
            } else {
                nodes[item].style = { width: tmpVal, height: tmpVal }
            } */

            //delete nodes[item].data.size
            tmpValNodes = { data: nodes[item].data, classes: `node-size-${tmpVal}` }
        } else {
            tmpValNodes = nodes[item]
        }
        return tmpValNodes

    })



    return (
        {
            nodes: finalNodes,
            edges: edges
        }
    )
}

function FilterProvider({ children }) {
    const [{ dataFilters, trafficDirection, aggregationLevel, vpcFlowLogData }, dispatch] = useReducer(reducer, initialState)

    React.useEffect(() => {
        const result = handleLoadData(dataFilters, trafficDirection, aggregationLevel)
        console.log(dataFilters, trafficDirection, aggregationLevel)
        console.log(result)
        dispatch({ type: "SetVpcFlowLogData", payload: { vpcFlowLogData: result.nodes.concat(result.edges) } })
    }, [dataFilters, trafficDirection, aggregationLevel]);

    return (
        <FilterContext.Provider value={{
            dataFilters,
            trafficDirection,
            aggregationLevel,
            vpcFlowLogData,

            dispatch,
        }} >
            {children}
        </ FilterContext.Provider>
    )
}

function useFilter() {
    const context = useContext(FilterContext)
    if (context === undefined) {
        throw new Error('useFilter must be used within a FilterProvider')
    }
    return context;
}

export { FilterProvider, useFilter }