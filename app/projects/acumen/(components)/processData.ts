import { csvToJson } from "./csv2Json";

export function loadData(filters: any[], reverseFilters: any) {
    var data: vpcFlowlogRecord[];
    console.log(filters)
    //Filters are passed as configuration in key:value pair.
    const tmpData = csvToJson();
    if (filters.length > 0) {
        data = tmpData?.filter((item) => {
            return blnCheckFilterConditions2(item)
        }) || []
    } else {
        data = tmpData || []
    }
    console.log(data)

    //check each item in filters and create a filter based on following fields: 
    //source_ip,destination_ip, packet_source_ip,packet_destination_ip,subnet_id,flow_direction,source_service,destination_service,traffic_path,total_bytes,total_packets,aggregation_level,gateway_type,traffic_path_descr

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

    /* function blnCheckFilterConditions(item: vpcFlowlogRecord): boolean {
        // Check if the item matches the filter conditions
        return (
            (filters.aggregation_level === undefined || item.aggregation_level === filters.aggregation_level) &&
            (filters.source_ip === undefined || item.source_ip === filters.source_ip) &&
            (filters.destination_ip === undefined || item.destination_ip === filters.destination_ip) &&
            (filters.packet_source_ip === undefined || item.packet_source_ip === filters.packet_source_ip) &&
            (filters.packet_destination_ip === undefined || item.packet_destination_ip === filters.packet_destination_ip) &&
            (filters.subnet_id === undefined || item.subnet_id === filters.subnet_id) &&
            (filters.flow_direction === undefined || item.flow_direction === filters.flow_direction) &&
            (filters.source_service === undefined || item.source_service === filters.source_service) &&
            (filters.destination_service === undefined || item.destination_service === filters.destination_service) &&
            (filters.traffic_path === undefined || item.traffic_path === filters.traffic_path) &&
            (filters.min_total_bytes === undefined || item.total_bytes >= filters.min_total_bytes) &&
            (filters.max_total_bytes === undefined || item.total_bytes <= filters.max_total_bytes) &&
            (filters.min_total_packets === undefined || item.total_packets >= filters.min_total_packets) &&
            (filters.max_total_packets === undefined || item.total_packets <= filters.max_total_packets) &&
            (filters.gateway_type === undefined || item.gateway_type === filters.gateway_type) &&
            (filters.traffic_path_descr === undefined || item.traffic_path_descr === filters.traffic_path_descr) &&
            (reverseFilters.aggregation_level === undefined || item.aggregation_level !== reverseFilters.aggregation_level) &&
            (reverseFilters.source_ip === undefined || item.source_ip !== reverseFilters.source_ip) &&
            (reverseFilters.destination_ip === undefined || item.destination_ip !== reverseFilters.destination_ip) &&
            (reverseFilters.packet_source_ip === undefined || item.packet_source_ip !== reverseFilters.packet_source_ip) &&
            (reverseFilters.packet_destination_ip === undefined || item.packet_destination_ip !== reverseFilters.packet_destination_ip) &&
            (reverseFilters.subnet_id === undefined || item.subnet_id !== reverseFilters.subnet_id) &&
            (reverseFilters.flow_direction === undefined || item.flow_direction !== reverseFilters.flow_direction) &&
            (reverseFilters.source_service === undefined || item.source_service !== reverseFilters.source_service) &&
            (reverseFilters.destination_service === undefined || item.destination_service !== reverseFilters.destination_service) &&
            (reverseFilters.traffic_path === undefined || item.traffic_path !== reverseFilters.traffic_path) &&
            (reverseFilters.min_total_bytes === undefined || item.total_bytes < reverseFilters.min_total_bytes) &&
            (reverseFilters.max_total_bytes === undefined || item.total_bytes > reverseFilters.max_total_bytes) &&
            (reverseFilters.min_total_packets === undefined || item.total_packets < reverseFilters.min_total_packets) &&
            (reverseFilters.max_total_packets === undefined || item.total_packets > reverseFilters.max_total_packets) &&
            (reverseFilters.gateway_type === undefined || item.gateway_type !== reverseFilters.gateway_type) &&
            (reverseFilters.traffic_path_descr === undefined || item.traffic_path_descr !== reverseFilters.traffic_path_descr)
        );
    } */

    function blnCheckFilterConditions2(item: vpcFlowlogRecord): boolean {

        // Helper function to check if the item's field value matches the filter condition
        function matchesCondition(itemValue, filter): boolean {
            if (filter.type === 'include') {
                return Array.isArray(filter.value) ? filter.value.includes(itemValue) : itemValue === filter.value;
            } else { // filter.type === 'exclude'
                return Array.isArray(filter.value) ? !filter.value.includes(itemValue) : itemValue !== filter.value;
            }
        }

        function mapFields(field: string) {
            //source_ip,destination_ip, packet_source_ip,packet_destination_ip,subnet_id,flow_direction,
            //source_service,destination_service,traffic_path,total_bytes,total_packets,aggregation_level,
            //gateway_type,traffic_path_descr
            //traffic_direction: "both",
            //aggregation_level: "1",                 trafficPath: 0,                    aws_service: ""

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


    /*  function blnCheckFilterConditions(item: vpcFlowlogRecord): boolean {
         // Helper function to handle array or single value checks
         function isIncluded(filter, itemValue) {
             if (Array.isArray(filter)) {
                 return filter.includes(itemValue);
             } else {
                 return itemValue === filter;
             }
         }
 
         function isExcluded(filter, itemValue) {
             if (Array.isArray(filter)) {
                 return !filter.includes(itemValue);
             } else {
                 return itemValue !== filter;
             }
         }
 
         // Check if the item matches the filter conditions
         return (
             (filters.aggregation_level === undefined || isIncluded(filters.aggregation_level, item.aggregation_level)) &&
             (filters.source_ip === undefined || isIncluded(filters.source_ip, item.source_ip)) &&
             (filters.destination_ip === undefined || isIncluded(filters.destination_ip, item.destination_ip)) &&
             (filters.packet_source_ip === undefined || isIncluded(filters.packet_source_ip, item.packet_source_ip)) &&
             (filters.packet_destination_ip === undefined || isIncluded(filters.packet_destination_ip, item.packet_destination_ip)) &&
             (filters.subnet_id === undefined || isIncluded(filters.subnet_id, item.subnet_id)) &&
             (filters.flow_direction === undefined || isIncluded(filters.flow_direction, item.flow_direction)) &&
             (filters.source_service === undefined || isIncluded(filters.source_service, item.source_service)) &&
             (filters.destination_service === undefined || isIncluded(filters.destination_service, item.destination_service)) &&
             (filters.traffic_path === undefined || isIncluded(filters.traffic_path, item.traffic_path)) &&
             (filters.min_total_bytes === undefined || item.total_bytes >= filters.min_total_bytes) &&
             (filters.max_total_bytes === undefined || item.total_bytes <= filters.max_total_bytes) &&
             (filters.min_total_packets === undefined || item.total_packets >= filters.min_total_packets) &&
             (filters.max_total_packets === undefined || item.total_packets <= filters.max_total_packets) &&
             (filters.gateway_type === undefined || isIncluded(filters.gateway_type, item.gateway_type)) &&
             (filters.traffic_path_descr === undefined || isIncluded(filters.traffic_path_descr, item.traffic_path_descr)) &&
             (reverseFilters.aggregation_level === undefined || isExcluded(reverseFilters.aggregation_level, item.aggregation_level)) &&
             (reverseFilters.source_ip === undefined || isExcluded(reverseFilters.source_ip, item.source_ip)) &&
             (reverseFilters.destination_ip === undefined || isExcluded(reverseFilters.destination_ip, item.destination_ip)) &&
             (reverseFilters.packet_source_ip === undefined || isExcluded(reverseFilters.packet_source_ip, item.packet_source_ip)) &&
             (reverseFilters.packet_destination_ip === undefined || isExcluded(reverseFilters.packet_destination_ip, item.packet_destination_ip)) &&
             (reverseFilters.subnet_id === undefined || isExcluded(reverseFilters.subnet_id, item.subnet_id)) &&
             (reverseFilters.flow_direction === undefined || isExcluded(reverseFilters.flow_direction, item.flow_direction)) &&
             (reverseFilters.source_service === undefined || isExcluded(reverseFilters.source_service, item.source_service)) &&
             (reverseFilters.destination_service === undefined || isExcluded(reverseFilters.destination_service, item.destination_service)) &&
             (reverseFilters.traffic_path === undefined || isExcluded(reverseFilters.traffic_path, item.traffic_path)) &&
             (reverseFilters.min_total_bytes === undefined || item.total_bytes < reverseFilters.min_total_bytes) &&
             (reverseFilters.max_total_bytes === undefined || item.total_bytes > reverseFilters.max_total_bytes) &&
             (reverseFilters.min_total_packets === undefined || item.total_packets < reverseFilters.min_total_packets) &&
             (reverseFilters.max_total_packets === undefined || item.total_packets > reverseFilters.max_total_packets) &&
             (reverseFilters.gateway_type === undefined || isExcluded(reverseFilters.gateway_type, item.gateway_type)) &&
             (reverseFilters.traffic_path_descr === undefined || isExcluded(reverseFilters.traffic_path_descr, item.traffic_path_descr))
         );
     } */


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