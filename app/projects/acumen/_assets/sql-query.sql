-- Aggregated results including port-level details
SELECT * FROM (
    SELECT 
        srcaddr AS source_ip,
        dstaddr AS destination_ip,
        CASE 
            WHEN dstport < 1000 THEN 'Client_port'
            WHEN srcport BETWEEN 49152 AND 65535 THEN 'Client_port'
            ELSE CAST(srcport AS VARCHAR)
        END AS source_port,
        CASE 
            WHEN srcport < 1000 THEN 'Client_port'
            WHEN dstport BETWEEN 49152 AND 65535 THEN 'Client_port'
            ELSE CAST(dstport AS VARCHAR)
        END AS destination_port,
        pkt_srcaddr AS packet_source_ip,
        pkt_dstaddr AS packet_destination_ip,
        subnet_id,
        flow_direction,
        CASE 
            WHEN (srcaddr LIKE '10.%' OR srcaddr LIKE '172.16.%' OR srcaddr LIKE '192.168.%') AND pkt_src_aws_service = '-' THEN 'VPC'
            ELSE pkt_src_aws_service 
        END AS source_service,
        CASE 
            WHEN (dstaddr LIKE '10.%' OR dstaddr LIKE '172.16.%' OR dstaddr LIKE '192.168.%') AND pkt_dst_aws_service = '-' THEN 'VPC'
            ELSE pkt_dst_aws_service 
        END AS destination_service,
        traffic_path,
        SUM(bytes) AS total_bytes,
        SUM(packets) AS total_packets,
        'Detailed' AS aggregation_level,
        CASE 
            WHEN traffic_path IN (2, 8) THEN 'Internet Gateway'
            WHEN traffic_path = 7 THEN 'VPC Gateway Endpoint'
            ELSE 'Other' 
        END AS gateway_type,
        CASE 
            WHEN traffic_path = 2 THEN 'Through Internet Gateway'
            WHEN traffic_path = 8 THEN 'Through Internet Gateway (Nitro-based instances only)'
            WHEN traffic_path = 7 THEN 'Through VPC Gateway Endpoint'
            ELSE 'Unknown Traffic Path'
        END AS traffic_path_descr
    FROM 
        v2cloudevangelist_flowlog_s3
    GROUP BY 
        srcaddr, dstaddr, 
        CASE WHEN dstport < 1000 THEN 'Client_port' WHEN srcport BETWEEN 49152 AND 65535 THEN 'Client_port' ELSE CAST(srcport AS VARCHAR) END, 
        CASE WHEN srcport < 1000 THEN 'Client_port' WHEN dstport BETWEEN 49152 AND 65535 THEN 'Client_port' ELSE CAST(dstport AS VARCHAR) END,
        pkt_srcaddr, pkt_dstaddr, subnet_id, flow_direction,
        CASE WHEN (srcaddr LIKE '10.%' OR srcaddr LIKE '172.16.%' OR srcaddr LIKE '192.168.%') AND pkt_src_aws_service = '-' THEN 'VPC' ELSE pkt_src_aws_service END,
        CASE WHEN (dstaddr LIKE '10.%' OR dstaddr LIKE '172.16.%' OR dstaddr LIKE '192.168.%') AND pkt_dst_aws_service = '-' THEN 'VPC' ELSE pkt_dst_aws_service END,
        traffic_path
    ORDER BY 
        SUM(bytes) DESC
    LIMIT 1000
) AS detailed_results

UNION ALL

-- Aggregated results at the IP level only, ignoring ports
SELECT * FROM (
    SELECT 
        srcaddr AS source_ip,
        dstaddr AS destination_ip,
        'All' AS source_port,
        'All' AS destination_port,
        pkt_srcaddr AS packet_source_ip,
        pkt_dstaddr AS packet_destination_ip,
        subnet_id,
        flow_direction,
        CASE 
            WHEN (srcaddr LIKE '10.%' OR srcaddr LIKE '172.16.%' OR srcaddr LIKE '192.168.%') AND pkt_src_aws_service = '-' THEN 'VPC'
            ELSE pkt_src_aws_service 
        END AS source_service,
        CASE 
            WHEN (dstaddr LIKE '10.%' OR dstaddr LIKE '172.16.%' OR dstaddr LIKE '192.168.%') AND pkt_dst_aws_service = '-' THEN 'VPC'
            ELSE pkt_dst_aws_service 
        END AS destination_service,
        traffic_path,
        SUM(bytes) AS total_bytes,
        SUM(packets) AS total_packets,
        'IP Level' AS aggregation_level,
        CASE 
            WHEN traffic_path IN (2, 8) THEN 'Internet Gateway'
            WHEN traffic_path = 7 THEN 'VPC Gateway Endpoint'
            ELSE 'Other' 
        END AS gateway_type,
        CASE 
            WHEN traffic_path = 2 THEN 'Through Internet Gateway'
            WHEN traffic_path = 8 THEN 'Through Internet Gateway (Nitro-based instances only)'
            WHEN traffic_path = 7 THEN 'Through VPC Gateway Endpoint'
            ELSE 'Unknown Traffic Path'
        END AS traffic_path_descr
    FROM 
        v2cloudevangelist_flowlog_s3
    GROUP BY 
        srcaddr, dstaddr, 
        pkt_srcaddr, pkt_dstaddr, subnet_id, flow_direction,
        CASE WHEN (srcaddr LIKE '10.%' OR srcaddr LIKE '172.16.%' OR srcaddr LIKE '192.168.%') AND pkt_src_aws_service = '-' THEN 'VPC' ELSE pkt_src_aws_service END,
        CASE WHEN (dstaddr LIKE '10.%' OR dstaddr LIKE '172.16.%' OR dstaddr LIKE '192.168.%') AND pkt_dst_aws_service = '-' THEN 'VPC' ELSE pkt_dst_aws_service END,
        traffic_path
    ORDER BY 
        SUM(bytes) DESC
    LIMIT 1000
) AS ip_level_results

UNION ALL

-- Aggregated results based on source and destination services, ignoring IPs and ports
SELECT * FROM (
    SELECT 
        'All' AS source_ip,
        'All' AS destination_ip,
        'All' AS source_port,
        'All' AS destination_port,
        'All' AS packet_source_ip,
        'All' AS packet_destination_ip,
        'All' AS subnet_id,
        'All' AS flow_direction,
        pkt_src_aws_service AS source_service,
        pkt_dst_aws_service AS destination_service,
        traffic_path,
        SUM(bytes) AS total_bytes,
        SUM(packets) AS total_packets,
        'Service Level' AS aggregation_level,
        CASE 
            WHEN traffic_path IN (2, 8) THEN 'Internet Gateway'
            WHEN traffic_path = 7 THEN 'VPC Gateway Endpoint'
            ELSE 'Other' 
        END AS gateway_type,
        CASE 
            WHEN traffic_path = 2 THEN 'Through Internet Gateway'
            WHEN traffic_path = 8 THEN 'Through Internet Gateway (Nitro-based instances only)'
            WHEN traffic_path = 7 THEN 'Through VPC Gateway Endpoint'
            ELSE 'Unknown Traffic Path'
        END AS traffic_path_descr
    FROM 
        v2cloudevangelist_flowlog_s3
    GROUP BY 
        pkt_src_aws_service, pkt_dst_aws_service, traffic_path
    ORDER BY 
        SUM(bytes) DESC
    LIMIT 1000
) AS service_level_results;
