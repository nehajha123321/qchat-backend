export const csvData = `source_ip,destination_ip,source_port,destination_port,packet_source_ip,packet_destination_ip,subnet_id,flow_direction,source_service,destination_service,traffic_path,total_bytes,total_packets,aggregation_level,gateway_type,traffic_path_descr
All,All,All,All,All,All,All,All,EC2,-,,144096520,2657515,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,CLOUDFRONT,-,,99060523,199881,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,CLOUDFRONT,1,75646241,130109,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,CLOUDFRONT,,74676782,127971,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,CLOUDFRONT,8,74676782,127971,Service Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
All,All,All,All,All,All,All,All,-,AMAZON,1,74020224,89214,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,AMAZON,8,72507896,87393,Service Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
All,All,All,All,All,All,All,All,-,AMAZON,,72507896,87393,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,DYNAMODB,-,,64102791,64685,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,CLOUDFRONT,-,1,49133975,99081,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,AMAZON,-,,46669409,186021,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,DYNAMODB,7,39266881,55783,Service Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
All,All,All,All,All,All,All,All,AMAZON,-,1,23142188,92273,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,EC2,-,1,15133935,38064,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,-,,14370066,254836,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,EC2,1,5292867,32658,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,EC2,,5219832,32304,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,EC2,8,5219728,32305,Service Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
All,All,All,All,All,All,All,All,-,-,1,2591681,7409,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,-,8,24728,617,Service Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
All,All,All,All,All,All,All,All,S3,-,,21819,65,Service Level,Other,Unknown Traffic Path
All,All,All,All,All,All,All,All,-,S3,7,21265,63,Service Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
All,All,All,All,All,All,All,All,-,EC2,7,9591,32,Service Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,18.160.46.104,Client_port,443,10.0.6.205,18.160.46.104,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,16029220,24446,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.3,Client_port,443,10.0.6.205,18.160.46.3,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,13861349,21906,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.63,Client_port,443,10.0.6.205,18.160.46.63,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,11512602,19349,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.8,Client_port,443,10.0.6.205,18.160.46.8,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,10985431,18822,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.104,10.0.6.205,443,Client_port,18.160.46.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,9410263,18393,Detailed,Other,Unknown Traffic Path
18.160.46.3,10.0.6.205,443,Client_port,18.160.46.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,8505949,16692,Detailed,Other,Unknown Traffic Path
10.0.56.2,18.160.46.104,Client_port,443,10.0.56.2,18.160.46.104,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,7496488,10735,Detailed,Other,Unknown Traffic Path
18.160.46.63,10.0.6.205,443,Client_port,18.160.46.63,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,7484714,14995,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,7453091,10637,Detailed,Other,Unknown Traffic Path
18.160.46.8,10.0.6.205,443,Client_port,18.160.46.8,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,7178036,14506,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.11,Client_port,443,10.0.6.205,3.239.232.11,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,7017268,8244,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.162.125.107,Client_port,443,10.0.6.205,3.162.125.107,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,6985061,12762,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.56.2,18.160.46.3,Client_port,443,10.0.56.2,18.160.46.3,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,6244585,9358,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,6216578,9274,Detailed,Other,Unknown Traffic Path
10.0.82.35,18.160.46.104,Client_port,443,10.0.82.35,18.160.46.104,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,6202760,9477,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,6167163,9368,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.216,Client_port,443,10.0.6.205,3.239.232.216,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5608032,6537,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.107,Client_port,443,10.0.6.205,3.239.232.107,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5553572,6569,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.181.186,10.0.82.141,443,Client_port,3.218.181.186,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,5552363,4346,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.180,Client_port,443,10.0.6.205,3.239.232.180,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5452885,6389,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.162.125.110,Client_port,443,10.0.6.205,3.162.125.110,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,5452119,10719,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.7,Client_port,443,10.0.6.205,3.239.232.7,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5416025,6325,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.34,Client_port,443,10.0.6.205,3.239.232.34,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5262980,6298,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.162.125.85,Client_port,443,10.0.6.205,3.162.125.85,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,5050495,10094,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.82,Client_port,443,10.0.6.205,3.239.232.82,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4947628,5770,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.19,Client_port,443,10.0.6.205,3.239.232.19,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4844354,5781,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.89,Client_port,443,10.0.6.205,3.239.232.89,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4831694,5628,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.162.125.107,10.0.6.205,443,Client_port,3.162.125.107,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,4828048,9972,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.162.125.109,Client_port,443,10.0.6.205,3.162.125.109,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,4800505,9873,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,3.218.181.186,Client_port,443,10.0.82.141,3.218.181.186,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,4697030,3964,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.35,18.160.46.8,Client_port,443,10.0.82.35,18.160.46.8,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4686972,7469,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.114,Client_port,443,10.0.6.205,3.239.232.114,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4484560,5190,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4466039,7163,Detailed,Other,Unknown Traffic Path
52.119.233.48,10.0.67.138,443,Client_port,52.119.233.48,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,4465263,3474,Detailed,Other,Unknown Traffic Path
10.0.56.2,18.160.46.8,Client_port,443,10.0.56.2,18.160.46.8,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,4348433,7285,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4320528,7212,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.107,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,4239667,4815,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.107,Client_port,443,10.0.67.138,3.239.232.107,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,4239667,4815,Detailed,Other,Unknown Traffic Path
10.0.82.35,18.160.46.63,Client_port,443,10.0.82.35,18.160.46.63,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4203648,7003,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4148140,6897,Detailed,Other,Unknown Traffic Path
10.0.56.2,18.160.46.63,Client_port,443,10.0.56.2,18.160.46.63,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,4115696,7098,Detailed,Other,Unknown Traffic Path
18.160.46.104,10.0.56.2,443,Client_port,18.160.46.104,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,4113997,7949,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,18.160.46.104,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,4087285,7869,Detailed,Other,Unknown Traffic Path
3.162.125.110,10.0.6.205,443,Client_port,3.162.125.110,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,4078957,8427,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4054318,6955,Detailed,Other,Unknown Traffic Path
10.0.82.35,18.160.46.3,Client_port,443,10.0.82.35,18.160.46.3,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4002526,6715,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3982514,6659,Detailed,Other,Unknown Traffic Path
3.162.125.85,10.0.6.205,443,Client_port,3.162.125.85,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,3949560,8210,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.233.48,Client_port,443,10.0.67.138,52.119.233.48,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,3783083,3300,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,3707246,4214,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.11,Client_port,443,10.0.67.138,3.239.232.11,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,3707246,4214,Detailed,Other,Unknown Traffic Path
10.0.69.60,18.160.46.3,Client_port,443,10.0.69.60,18.160.46.3,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,3706615,6110,Detailed,Other,Unknown Traffic Path
3.162.125.109,10.0.6.205,443,Client_port,3.162.125.109,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,3698576,7888,Detailed,Other,Unknown Traffic Path
18.160.46.3,10.0.56.2,443,Client_port,18.160.46.3,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,3677828,7094,Detailed,Other,Unknown Traffic Path
18.160.46.104,10.0.82.35,443,Client_port,18.160.46.104,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,3663563,7156,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3662257,5973,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,18.160.46.3,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,3633813,7000,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,18.160.46.104,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,3613703,7061,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.7,Client_port,443,10.0.67.138,3.239.232.7,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,3569764,4064,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,3376827,3847,Detailed,Other,Unknown Traffic Path
10.0.69.60,18.160.46.63,Client_port,443,10.0.69.60,18.160.46.63,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,3337569,5590,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3310248,5499,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.9,Client_port,443,10.0.6.205,3.239.232.9,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,3265184,3886,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.232.162,10.0.82.141,443,Client_port,52.119.232.162,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,2998186,2380,Detailed,Other,Unknown Traffic Path
10.0.56.2,3.162.125.107,Client_port,443,10.0.56.2,3.162.125.107,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,2956485,5361,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2952960,5347,Detailed,Other,Unknown Traffic Path
18.160.46.8,10.0.82.35,443,Client_port,18.160.46.8,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2862442,5617,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,18.160.46.8,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2821357,5507,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.78,Client_port,443,10.0.6.205,3.239.232.78,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2803535,3380,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.63,10.0.82.35,443,Client_port,18.160.46.63,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2774717,5443,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2741467,3109,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.89,Client_port,443,10.0.82.141,3.239.232.89,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2741467,3109,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,18.160.46.63,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2735405,5363,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2698762,3056,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.180,Client_port,443,10.0.82.141,3.239.232.180,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2698762,3056,Detailed,Other,Unknown Traffic Path
18.160.46.8,10.0.56.2,443,Client_port,18.160.46.8,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2689829,5583,Detailed,Other,Unknown Traffic Path
18.160.46.63,10.0.56.2,443,Client_port,18.160.46.63,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2659750,5425,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,18.160.46.8,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2647001,5489,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,18.160.46.63,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2607572,5314,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.236.169.126,Client_port,443,10.0.6.205,3.236.169.126,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2605101,3180,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.3,10.0.82.35,443,Client_port,18.160.46.3,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2592970,5130,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,18.160.46.3,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2582304,5085,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.119.232.162,Client_port,443,10.0.82.141,52.119.232.162,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,2575656,2264,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2468054,2825,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.19,Client_port,443,10.0.67.138,3.239.232.19,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2468054,2825,Detailed,Other,Unknown Traffic Path
10.0.69.60,18.160.46.104,Client_port,443,10.0.69.60,18.160.46.104,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2439273,4520,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2422402,2773,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.216,Client_port,443,10.0.67.138,3.239.232.216,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2422402,2773,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2408914,4440,Detailed,Other,Unknown Traffic Path
10.0.69.60,3.162.125.107,Client_port,443,10.0.69.60,3.162.125.107,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2387096,4132,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2365912,4082,Detailed,Other,Unknown Traffic Path
18.160.46.3,10.0.69.60,443,Client_port,18.160.46.3,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,2325579,4684,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2322423,2648,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.216,Client_port,443,10.0.52.161,3.239.232.216,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,2322423,2648,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2295922,2617,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.82,Client_port,443,10.0.82.141,3.239.232.82,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2295922,2617,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,18.160.46.3,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2289728,4605,Detailed,Other,Unknown Traffic Path
10.0.69.60,18.160.46.8,Client_port,443,10.0.69.60,18.160.46.8,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2233357,4529,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2198864,4447,Detailed,Other,Unknown Traffic Path
18.160.46.63,10.0.69.60,443,Client_port,18.160.46.63,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,2159446,4359,Detailed,Other,Unknown Traffic Path
10.0.56.2,3.162.125.85,Client_port,443,10.0.56.2,3.162.125.85,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,2154587,4270,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,18.160.46.63,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2141893,4321,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2120715,4184,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.240,Client_port,443,10.0.6.205,3.239.232.240,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2097013,2557,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.9,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2078000,2380,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.9,Client_port,443,10.0.67.138,3.239.232.9,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2078000,2380,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.34,Client_port,443,10.0.82.141,3.239.232.34,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2058797,2375,Detailed,Other,Unknown Traffic Path
52.119.234.178,10.0.52.161,443,Client_port,52.119.234.178,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,2032174,1559,Detailed,Other,Unknown Traffic Path
3.162.125.107,10.0.56.2,443,Client_port,3.162.125.107,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2017085,4200,Detailed,Other,Unknown Traffic Path
3.239.232.11,10.0.6.205,443,Client_port,3.239.232.11,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,2010008,8215,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,3.162.125.107,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2000133,4170,Detailed,Other,Unknown Traffic Path
10.0.56.2,3.162.125.110,Client_port,443,10.0.56.2,3.162.125.110,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,1998564,4272,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1961505,4181,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.34,Client_port,443,10.0.52.161,3.239.232.34,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1946543,2224,Detailed,Other,Unknown Traffic Path
10.0.82.35,3.162.125.110,Client_port,443,10.0.82.35,3.162.125.110,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1879180,3533,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1868179,3493,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1856579,2106,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.114,Client_port,443,10.0.52.161,3.239.232.114,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1856579,2106,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.34,Client_port,443,10.0.67.138,3.239.232.34,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1842914,2139,Detailed,Other,Unknown Traffic Path
10.0.82.35,3.162.125.85,Client_port,443,10.0.82.35,3.162.125.85,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1829610,3517,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.6.205,443,Client_port,3.239.232.34,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1796789,7240,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1787064,2066,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1786815,3412,Detailed,Other,Unknown Traffic Path
10.0.56.2,3.162.125.109,Client_port,443,10.0.56.2,3.162.125.109,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,1771282,3613,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.181,Client_port,443,10.0.6.205,3.239.232.181,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1769130,2179,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,3.239.232.19,Client_port,443,10.0.82.141,3.239.232.19,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1764477,2013,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1764425,2012,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1755463,2009,Detailed,Other,Unknown Traffic Path
18.160.46.8,10.0.69.60,443,Client_port,18.160.46.8,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1745804,3598,Detailed,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,Client_port,443,10.0.56.2,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1744007,3551,Detailed,Other,Unknown Traffic Path
18.160.46.104,10.0.69.60,443,Client_port,18.160.46.104,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1741502,3542,Detailed,Other,Unknown Traffic Path
3.218.182.16,10.0.66.24,443,Client_port,3.218.182.16,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1709688,1183,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,18.160.46.8,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1709550,3508,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,18.160.46.104,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1709275,3463,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.119.234.178,Client_port,443,10.0.52.161,52.119.234.178,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,1694793,1428,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.35,3.162.125.107,Client_port,443,10.0.82.35,3.162.125.107,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1693101,3389,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1686737,1935,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.82,Client_port,443,10.0.52.161,3.239.232.82,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1686737,1935,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.6.205,443,Client_port,3.239.232.107,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1674177,6791,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1666241,3334,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.0,Client_port,443,10.0.6.205,3.239.232.0,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1661474,2060,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.181.152,10.0.66.24,443,Client_port,3.218.181.152,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1661057,1150,Detailed,Other,Unknown Traffic Path
10.0.69.60,3.162.125.110,Client_port,443,10.0.69.60,3.162.125.110,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1656706,3132,Detailed,Other,Unknown Traffic Path
44.215.78.151,10.0.6.205,443,Client_port,44.215.78.151,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1646858,4954,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1646482,1875,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.180,Client_port,443,10.0.67.138,3.239.232.180,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1646482,1875,Detailed,Other,Unknown Traffic Path
10.0.69.60,3.162.125.109,Client_port,443,10.0.69.60,3.162.125.109,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1643067,3237,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1643067,3237,Detailed,Other,Unknown Traffic Path
3.162.125.110,10.0.56.2,443,Client_port,3.162.125.110,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1639078,3467,Detailed,Other,Unknown Traffic Path
3.239.232.7,10.0.6.205,443,Client_port,3.239.232.7,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1638219,6694,Detailed,Other,Unknown Traffic Path
3.239.232.216,10.0.6.205,443,Client_port,3.239.232.216,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1631113,6738,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1622383,3044,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.11,Client_port,443,10.0.52.161,3.239.232.11,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1617718,1929,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1617718,1929,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1617076,1870,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.11,Client_port,443,10.0.82.141,3.239.232.11,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1617076,1870,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,3.162.125.110,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1614240,3395,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1602925,1816,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.114,Client_port,443,10.0.67.138,3.239.232.114,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1602925,1816,Detailed,Other,Unknown Traffic Path
3.162.125.107,10.0.69.60,443,Client_port,3.162.125.107,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1597386,3221,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,3.162.125.85,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1592868,3377,Detailed,Other,Unknown Traffic Path
3.162.125.85,10.0.56.2,443,Client_port,3.162.125.85,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1592868,3377,Detailed,Other,Unknown Traffic Path
3.239.232.180,10.0.6.205,443,Client_port,3.239.232.180,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1590088,6537,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1587967,1830,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.213,Client_port,443,10.0.6.205,3.239.232.213,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1586354,1955,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.69.60,443,Client_port,3.162.125.107,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1575908,3176,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1575136,1788,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.89,Client_port,443,10.0.52.161,3.239.232.89,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1575136,1788,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.6.205,443,Client_port,3.239.232.19,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1499221,6016,Detailed,Other,Unknown Traffic Path
10.0.82.35,3.162.125.109,Client_port,443,10.0.82.35,3.162.125.109,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1495593,3224,Detailed,Other,Unknown Traffic Path
3.218.180.118,10.0.58.37,443,Client_port,3.218.180.118,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1494631,1022,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.236.169.126,Client_port,443,10.0.82.141,3.236.169.126,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1470480,1668,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1470480,1668,Detailed,Other,Unknown Traffic Path
3.213.207.164,10.0.6.205,443,Client_port,3.213.207.164,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1467917,4535,Detailed,Other,Unknown Traffic Path
52.90.245.104,10.0.6.205,Client_port,Client_port,52.90.245.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1441792,32768,Detailed,Other,Unknown Traffic Path
54.173.4.226,10.0.6.205,Client_port,Client_port,54.173.4.226,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1441792,32768,Detailed,Other,Unknown Traffic Path
3.237.106.229,10.0.6.205,Client_port,Client_port,3.237.106.229,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1441792,32768,Detailed,Other,Unknown Traffic Path
3.89.238.174,10.0.6.205,Client_port,Client_port,3.89.238.174,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1441748,32767,Detailed,Other,Unknown Traffic Path
52.119.234.114,10.0.66.24,443,Client_port,52.119.234.114,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1430288,983,Detailed,Other,Unknown Traffic Path
3.218.181.116,10.0.66.24,443,Client_port,3.218.181.116,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1424203,972,Detailed,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,Client_port,443,10.0.82.35,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1413431,3085,Detailed,Other,Unknown Traffic Path
3.162.125.109,10.0.56.2,443,Client_port,3.162.125.109,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1411802,2901,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,443,Client_port,3.162.125.109,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1398229,2860,Detailed,Other,Unknown Traffic Path
3.239.232.82,10.0.6.205,443,Client_port,3.239.232.82,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1397678,5753,Detailed,Other,Unknown Traffic Path
3.162.125.85,10.0.82.35,443,Client_port,3.162.125.85,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1388786,2830,Detailed,Other,Unknown Traffic Path
3.239.232.89,10.0.6.205,443,Client_port,3.239.232.89,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1378917,5679,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,3.162.125.85,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1372794,2790,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.7,Client_port,443,10.0.82.141,3.239.232.7,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1372496,1620,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1372496,1620,Detailed,Other,Unknown Traffic Path
184.72.117.12,10.0.6.205,Client_port,Client_port,184.72.117.12,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1367168,31072,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.9,Client_port,443,10.0.82.141,3.239.232.9,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1347041,1529,Detailed,Other,Unknown Traffic Path
3.162.125.110,10.0.82.35,443,Client_port,3.162.125.110,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1341491,2777,Detailed,Other,Unknown Traffic Path
3.86.190.255,10.0.6.205,Client_port,Client_port,3.86.190.255,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1324840,30110,Detailed,Other,Unknown Traffic Path
3.218.181.124,10.0.92.77,443,Client_port,3.218.181.124,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1319281,918,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1290065,1467,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.240,Client_port,443,10.0.52.161,3.239.232.240,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1290065,1467,Detailed,Other,Unknown Traffic Path
3.162.125.107,10.0.82.35,443,Client_port,3.162.125.107,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1287803,2690,Detailed,Other,Unknown Traffic Path
3.232.95.114,10.0.6.205,Client_port,Client_port,3.232.95.114,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1278288,29052,Detailed,Other,Unknown Traffic Path
3.218.180.175,10.0.58.37,443,Client_port,3.218.180.175,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1276385,893,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,3.162.125.110,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1264299,2616,Detailed,Other,Unknown Traffic Path
34.202.28.68,10.0.6.205,443,Client_port,34.202.28.68,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1261079,3877,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,3.162.125.107,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1252007,2626,Detailed,Other,Unknown Traffic Path
3.162.125.110,10.0.69.60,443,Client_port,3.162.125.110,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1242433,2489,Detailed,Other,Unknown Traffic Path
3.239.232.114,10.0.6.205,443,Client_port,3.239.232.114,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1237239,5154,Detailed,Other,Unknown Traffic Path
54.91.158.228,10.0.6.205,Client_port,Client_port,54.91.158.228,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1213344,27576,Detailed,Other,Unknown Traffic Path
3.162.125.109,10.0.69.60,443,Client_port,3.162.125.109,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1202543,2589,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,3.162.125.110,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1200366,2415,Detailed,Other,Unknown Traffic Path
3.162.125.109,10.0.82.35,443,Client_port,3.162.125.109,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1198027,2607,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.107,Client_port,443,10.0.52.161,3.239.232.107,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1193800,1383,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.107,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1193800,1383,Detailed,Other,Unknown Traffic Path
10.0.69.60,3.162.125.85,Client_port,443,10.0.69.60,3.162.125.85,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1163048,2540,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,443,Client_port,3.162.125.109,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1157245,2539,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.107,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,1149543,4860,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.67.138,443,Client_port,3.239.232.107,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,1149543,4859,Detailed,Other,Unknown Traffic Path
13.126.192.187,10.0.6.205,443,Client_port,13.126.192.187,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1146670,1995,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,443,Client_port,3.162.125.109,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1143050,2488,Detailed,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,Client_port,443,10.0.69.60,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1142913,2497,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.9,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1113008,1273,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.78,Client_port,443,10.0.52.161,3.239.232.78,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1098249,1243,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.213,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1092799,1233,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.213,Client_port,443,10.0.82.141,3.239.232.213,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1092799,1233,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.181,Client_port,443,10.0.82.141,3.239.232.181,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1090147,1257,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.181,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1090147,1257,Detailed,Other,Unknown Traffic Path
3.218.181.183,10.0.92.77,443,Client_port,3.218.181.183,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1083696,743,Detailed,Other,Unknown Traffic Path
3.218.180.187,10.0.66.24,443,Client_port,3.218.180.187,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1061216,726,Detailed,Other,Unknown Traffic Path
34.229.28.141,10.0.6.205,443,Client_port,34.229.28.141,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1060958,3216,Detailed,Other,Unknown Traffic Path
3.239.232.9,10.0.6.205,443,Client_port,3.239.232.9,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1056806,4288,Detailed,Other,Unknown Traffic Path
52.119.234.176,10.0.52.161,443,Client_port,52.119.234.176,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1054526,867,Detailed,Other,Unknown Traffic Path
52.119.234.142,10.0.66.24,443,Client_port,52.119.234.142,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1051846,717,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1041815,1178,Detailed,Other,Unknown Traffic Path
3.218.181.135,10.0.82.141,443,Client_port,3.218.181.135,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1012638,838,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1010679,1151,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.180,Client_port,443,10.0.52.161,3.239.232.180,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1010679,1151,Detailed,Other,Unknown Traffic Path
3.239.232.11,10.0.67.138,443,Client_port,3.239.232.11,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,1007300,4264,Detailed,Other,Unknown Traffic Path
3.162.125.85,10.0.69.60,443,Client_port,3.162.125.85,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,999691,2070,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.119.234.176,Client_port,443,10.0.52.161,52.119.234.176,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,990024,872,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.69.60,443,Client_port,3.162.125.85,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,983950,2044,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,982987,1131,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.114,Client_port,443,10.0.82.141,3.239.232.114,subnet-0f90780670d905556,egress,VPC,AMAZON,1,982987,1131,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,982758,1148,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.78,Client_port,443,10.0.67.138,3.239.232.78,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,982758,1148,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.7,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,976316,4101,Detailed,Other,Unknown Traffic Path
3.239.232.7,10.0.67.138,443,Client_port,3.239.232.7,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,976316,4101,Detailed,Other,Unknown Traffic Path
34.237.177.62,10.0.6.205,443,Client_port,34.237.177.62,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,954779,2902,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.0,Client_port,443,10.0.67.138,3.239.232.0,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,943765,1079,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,943765,1079,Detailed,Other,Unknown Traffic Path
3.218.181.102,10.0.92.77,443,Client_port,3.218.181.102,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,938167,646,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.11,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,933305,3949,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.82,Client_port,443,10.0.67.138,3.239.232.82,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,918390,1070,Detailed,Other,Unknown Traffic Path
52.119.229.0,10.0.92.77,443,Client_port,52.119.229.0,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,917048,628,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,911590,1053,Detailed,Other,Unknown Traffic Path
3.218.181.115,10.0.67.138,443,Client_port,3.218.181.115,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,905874,788,Detailed,Other,Unknown Traffic Path
52.119.233.56,10.0.67.138,443,Client_port,52.119.233.56,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,905117,711,Detailed,Other,Unknown Traffic Path
3.239.232.78,10.0.6.205,443,Client_port,3.239.232.78,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,901423,3591,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.181.115,Client_port,443,10.0.67.138,3.218.181.115,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,878322,793,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,820860,989,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.236.169.126,Client_port,443,10.0.67.138,3.236.169.126,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,820860,989,Detailed,Other,Unknown Traffic Path
52.119.234.230,10.0.67.138,443,Client_port,52.119.234.230,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,812253,626,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.135,Client_port,443,10.0.82.141,3.218.181.135,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,804863,648,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
35.154.158.236,10.0.6.205,443,Client_port,35.154.158.236,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,801151,1403,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,792801,903,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.216,Client_port,443,10.0.82.141,3.239.232.216,subnet-0f90780670d905556,egress,VPC,AMAZON,1,792801,903,Detailed,Other,Unknown Traffic Path
3.218.180.147,10.0.67.138,443,Client_port,3.218.180.147,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,782449,706,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.181.153,Client_port,443,10.0.67.138,3.218.181.153,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,779114,746,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.236.169.126,10.0.6.205,443,Client_port,3.236.169.126,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,771135,3020,Detailed,Other,Unknown Traffic Path
3.218.180.187,10.0.52.161,443,Client_port,3.218.180.187,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,764844,702,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,44.215.78.151,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,763574,2329,Detailed,Other,Unknown Traffic Path
44.215.78.151,10.0.67.138,443,Client_port,44.215.78.151,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,763574,2329,Detailed,Other,Unknown Traffic Path
3.218.181.153,10.0.67.138,443,Client_port,3.218.181.153,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,759474,723,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.180.147,Client_port,443,10.0.67.138,3.218.180.147,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,747357,703,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.89,10.0.82.141,443,Client_port,3.239.232.89,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,740441,3144,Detailed,Other,Unknown Traffic Path
3.218.182.180,10.0.67.138,443,Client_port,3.218.182.180,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,739087,652,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.187,Client_port,443,10.0.52.161,3.218.180.187,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,727254,658,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,52.119.233.56,Client_port,443,10.0.67.138,52.119.233.56,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,724794,641,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.180,10.0.82.141,443,Client_port,3.239.232.180,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,724462,3084,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.180,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,724462,3084,Detailed,Other,Unknown Traffic Path
44.201.133.38,10.0.6.205,40472,Client_port,44.201.133.38,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
34.229.85.67,10.0.6.205,39766,Client_port,34.229.85.67,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
34.229.85.67,10.0.6.205,39768,Client_port,34.229.85.67,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
44.201.203.59,10.0.6.205,33360,Client_port,44.201.203.59,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.159.193.133,10.0.6.205,38210,Client_port,54.159.193.133,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
44.201.133.38,10.0.6.205,40474,Client_port,44.201.133.38,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
3.227.244.89,10.0.6.205,41784,Client_port,3.227.244.89,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.159.193.133,10.0.6.205,38212,Client_port,54.159.193.133,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
3.227.244.89,10.0.6.205,41786,Client_port,3.227.244.89,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.91.79.36,10.0.6.205,34200,Client_port,54.91.79.36,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.164.143.165,10.0.6.205,37785,Client_port,54.164.143.165,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.164.143.165,10.0.6.205,37783,Client_port,54.164.143.165,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
35.172.236.199,10.0.6.205,40118,Client_port,35.172.236.199,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
34.224.99.134,10.0.6.205,34250,Client_port,34.224.99.134,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
34.224.99.134,10.0.6.205,34248,Client_port,34.224.99.134,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
54.91.79.36,10.0.6.205,34198,Client_port,54.91.79.36,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
44.211.94.35,10.0.6.205,38303,Client_port,44.211.94.35,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
44.201.203.59,10.0.6.205,33358,Client_port,44.201.203.59,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,720896,16384,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.46.143.211,Client_port,443,10.0.6.205,52.46.143.211,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,717201,828,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
44.211.94.35,10.0.6.205,38301,Client_port,44.211.94.35,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,713020,16205,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,52.46.143.211,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,712768,816,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.46.143.211,Client_port,443,10.0.82.141,52.46.143.211,subnet-0f90780670d905556,egress,VPC,AMAZON,1,712768,816,Detailed,Other,Unknown Traffic Path
10.0.6.205,67.220.247.33,Client_port,443,10.0.6.205,67.220.247.33,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,710756,844,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
34.201.243.21,10.0.6.205,37072,Client_port,34.201.243.21,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,710380,16145,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.89,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,709329,3015,Detailed,Other,Unknown Traffic Path
35.172.236.199,10.0.6.205,40120,Client_port,35.172.236.199,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,707740,16085,Detailed,Other,Unknown Traffic Path
34.201.243.21,10.0.6.205,37074,Client_port,34.201.243.21,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,706244,16051,Detailed,Other,Unknown Traffic Path
3.213.207.164,10.0.67.138,443,Client_port,3.213.207.164,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,703262,2203,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.78,Client_port,443,10.0.82.141,3.239.232.78,subnet-0f90780670d905556,egress,VPC,AMAZON,1,702150,816,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,702150,816,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,67.220.247.33,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,698193,802,Detailed,Other,Unknown Traffic Path
10.0.67.138,67.220.247.33,Client_port,443,10.0.67.138,67.220.247.33,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,698193,802,Detailed,Other,Unknown Traffic Path
52.203.162.156,10.0.6.205,443,Client_port,52.203.162.156,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,695274,1972,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.19,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,686234,2875,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.67.138,443,Client_port,3.239.232.19,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,686234,2875,Detailed,Other,Unknown Traffic Path
3.239.232.240,10.0.6.205,443,Client_port,3.239.232.240,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,685198,2685,Detailed,Other,Unknown Traffic Path
3.239.232.216,10.0.67.138,443,Client_port,3.239.232.216,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,666728,2820,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.216,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,666728,2820,Detailed,Other,Unknown Traffic Path
15.206.245.253,10.0.6.205,443,Client_port,15.206.245.253,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,664167,1167,Detailed,Other,Unknown Traffic Path
44.223.79.3,10.0.6.205,44780,Client_port,44.223.79.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,655996,14909,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.234.230,Client_port,443,10.0.67.138,52.119.234.230,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,653399,557,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,3.239.232.70,Client_port,443,10.0.67.138,3.239.232.70,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,650000,752,Detailed,Other,Unknown Traffic Path
34.202.28.68,10.0.52.161,443,Client_port,34.202.28.68,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,649720,1985,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,34.202.28.68,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,649592,1983,Detailed,Other,Unknown Traffic Path
44.223.79.3,10.0.6.205,44778,Client_port,44.223.79.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,648604,14741,Detailed,Other,Unknown Traffic Path
3.239.232.216,10.0.52.161,443,Client_port,3.239.232.216,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,639048,2698,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.216,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,639048,2698,Detailed,Other,Unknown Traffic Path
10.0.6.205,44.215.78.151,Client_port,443,10.0.6.205,44.215.78.151,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,637466,4274,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.67.138,443,Client_port,3.213.207.164,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,636961,2004,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,34.229.28.141,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,634596,1921,Detailed,Other,Unknown Traffic Path
34.229.28.141,10.0.82.141,443,Client_port,34.229.28.141,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,634596,1921,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.82,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,627687,2651,Detailed,Other,Unknown Traffic Path
3.239.232.82,10.0.82.141,443,Client_port,3.239.232.82,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,627687,2652,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.239.232.70,Client_port,443,10.0.6.205,3.239.232.70,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,624053,839,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,3.239.232.7,Client_port,443,10.0.52.161,3.239.232.7,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,623129,729,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,623129,729,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.181,Client_port,443,10.0.52.161,3.239.232.181,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,601070,682,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.181,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,601070,682,Detailed,Other,Unknown Traffic Path
3.218.182.103,10.0.67.138,443,Client_port,3.218.182.103,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,596228,516,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.180,Client_port,443,10.0.67.138,3.218.182.180,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,592700,495,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.181,10.0.6.205,443,Client_port,3.239.232.181,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,592370,2299,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.82.141,443,Client_port,3.239.232.34,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,582326,2423,Detailed,Other,Unknown Traffic Path
3.239.232.9,10.0.67.138,443,Client_port,3.239.232.9,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,572602,2408,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.9,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,572602,2408,Detailed,Other,Unknown Traffic Path
3.239.232.0,10.0.6.205,443,Client_port,3.239.232.0,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,561914,2175,Detailed,Other,Unknown Traffic Path
3.218.180.158,10.0.52.161,443,Client_port,3.218.180.158,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,545372,485,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.34,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,545319,2270,Detailed,Other,Unknown Traffic Path
44.215.78.151,10.0.82.141,443,Client_port,44.215.78.151,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,543490,1633,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,44.215.78.151,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,543490,1633,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.52.161,443,Client_port,3.239.232.34,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,536124,2259,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.34,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,536124,2260,Detailed,Other,Unknown Traffic Path
3.239.232.213,10.0.6.205,443,Client_port,3.239.232.213,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,534739,2082,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.67.138,443,Client_port,3.239.232.34,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,527592,2178,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.34,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,527592,2178,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.240,Client_port,443,10.0.82.141,3.239.232.240,subnet-0f90780670d905556,egress,VPC,AMAZON,1,515832,629,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,515832,629,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.103,Client_port,443,10.0.67.138,3.218.182.103,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,512905,458,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,3.218.180.158,Client_port,443,10.0.52.161,3.218.180.158,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,504872,463,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.114,10.0.52.161,443,Client_port,3.239.232.114,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,501462,2128,Detailed,Other,Unknown Traffic Path
10.0.6.205,67.220.246.91,Client_port,443,10.0.6.205,67.220.246.91,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,500091,569,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,67.220.246.91,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,500091,569,Detailed,Other,Unknown Traffic Path
10.0.82.141,67.220.246.91,Client_port,443,10.0.82.141,67.220.246.91,subnet-0f90780670d905556,egress,VPC,AMAZON,1,500091,569,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.19,Client_port,443,10.0.52.161,3.239.232.19,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,497901,608,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,497901,608,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.11,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,496059,2005,Detailed,Other,Unknown Traffic Path
3.239.232.11,10.0.52.161,443,Client_port,3.239.232.11,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,496059,2004,Detailed,Other,Unknown Traffic Path
3.213.207.164,10.0.52.161,443,Client_port,3.213.207.164,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,488869,1475,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.19,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,483794,2036,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.82.141,443,Client_port,3.239.232.19,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,483794,2036,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.213.207.164,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,482750,1467,Detailed,Other,Unknown Traffic Path
34.207.48.146,10.0.6.205,443,Client_port,34.207.48.146,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,475308,1547,Detailed,Other,Unknown Traffic Path
18.233.11.67,10.0.6.205,443,Client_port,18.233.11.67,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,472795,1459,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.82,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,469245,1977,Detailed,Other,Unknown Traffic Path
3.239.232.82,10.0.52.161,443,Client_port,3.239.232.82,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,469245,1976,Detailed,Other,Unknown Traffic Path
44.218.2.19,10.0.6.205,443,Client_port,44.218.2.19,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,469144,609,Detailed,Other,Unknown Traffic Path
13.126.192.187,10.0.67.138,443,Client_port,13.126.192.187,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,468932,817,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.234.52,Client_port,443,10.0.67.138,52.119.234.52,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,468091,446,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.114,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,466688,1988,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.213.207.164,Client_port,443,10.0.6.205,3.213.207.164,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,464377,3677,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.11,10.0.82.141,443,Client_port,3.239.232.11,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,461281,1924,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.11,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,461281,1924,Detailed,Other,Unknown Traffic Path
3.218.182.16,10.0.67.138,443,Client_port,3.218.182.16,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,457280,422,Detailed,Other,Unknown Traffic Path
54.144.248.163,10.0.6.205,443,Client_port,54.144.248.163,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,449651,576,Detailed,Other,Unknown Traffic Path
3.239.232.180,10.0.67.138,443,Client_port,3.239.232.180,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,449634,1888,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.180,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,449634,1888,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,444339,512,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.89,Client_port,443,10.0.67.138,3.239.232.89,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,444339,512,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,13.126.192.187,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,442572,771,Detailed,Other,Unknown Traffic Path
3.239.232.114,10.0.67.138,443,Client_port,3.239.232.114,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,432280,1839,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.114,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,432280,1840,Detailed,Other,Unknown Traffic Path
3.239.232.89,10.0.52.161,443,Client_port,3.239.232.89,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,426077,1810,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.89,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,426077,1811,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.213,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,425176,520,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.213,Client_port,443,10.0.52.161,3.239.232.213,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,425176,520,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.135,Client_port,443,10.0.52.161,3.218.180.135,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,420441,388,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.7,10.0.82.141,443,Client_port,3.239.232.7,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,412918,1673,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.7,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,412918,1673,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,34.237.177.62,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,412558,1284,Detailed,Other,Unknown Traffic Path
34.237.177.62,10.0.82.141,443,Client_port,34.237.177.62,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,412558,1284,Detailed,Other,Unknown Traffic Path
52.119.234.52,10.0.67.138,443,Client_port,52.119.234.52,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,403695,407,Detailed,Other,Unknown Traffic Path
3.236.169.126,10.0.82.141,443,Client_port,3.236.169.126,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,400232,1700,Detailed,Other,Unknown Traffic Path
10.0.6.205,34.202.28.68,Client_port,443,10.0.6.205,34.202.28.68,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,400216,3250,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
35.171.174.60,10.0.6.205,443,Client_port,35.171.174.60,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,394537,502,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.70,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,393801,466,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.119.234.246,Client_port,443,10.0.52.161,52.119.234.246,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,387718,371,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.180.135,10.0.52.161,443,Client_port,3.218.180.135,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,380668,419,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.16,Client_port,443,10.0.67.138,3.218.182.16,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,378515,377,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.182.145,10.0.67.138,443,Client_port,3.218.182.145,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,370274,345,Detailed,Other,Unknown Traffic Path
3.85.58.70,10.0.6.205,443,Client_port,3.85.58.70,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,366906,464,Detailed,Other,Unknown Traffic Path
3.239.232.9,10.0.82.141,443,Client_port,3.239.232.9,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,366683,1552,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.9,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,366683,1553,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,13.126.192.187,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,364514,638,Detailed,Other,Unknown Traffic Path
13.126.192.187,10.0.82.141,443,Client_port,13.126.192.187,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,364514,638,Detailed,Other,Unknown Traffic Path
34.229.28.141,10.0.67.138,443,Client_port,34.229.28.141,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,363084,1105,Detailed,Other,Unknown Traffic Path
52.119.234.246,10.0.52.161,443,Client_port,52.119.234.246,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,360712,337,Detailed,Other,Unknown Traffic Path
10.0.6.205,34.229.28.141,Client_port,443,10.0.6.205,34.229.28.141,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,357654,2500,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
34.237.177.62,10.0.52.161,443,Client_port,34.237.177.62,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,356686,1080,Detailed,Other,Unknown Traffic Path
10.0.6.205,13.126.192.187,Client_port,443,10.0.6.205,13.126.192.187,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,356405,1369,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.213.207.164,10.0.82.141,443,Client_port,3.213.207.164,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,354429,1074,Detailed,Other,Unknown Traffic Path
44.215.78.151,10.0.52.161,443,Client_port,44.215.78.151,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,353777,1017,Detailed,Other,Unknown Traffic Path
34.200.67.142,10.0.6.205,443,Client_port,34.200.67.142,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,351043,1004,Detailed,Other,Unknown Traffic Path
34.202.28.68,10.0.67.138,443,Client_port,34.202.28.68,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,350566,1084,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,34.202.28.68,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,350566,1084,Detailed,Other,Unknown Traffic Path
3.239.232.240,10.0.52.161,443,Client_port,3.239.232.240,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,349929,1478,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.240,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,349929,1478,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,34.237.177.62,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,349770,1068,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.213.207.164,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,348206,1064,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.239.232.0,Client_port,443,10.0.52.161,3.239.232.0,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,345305,408,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,345305,408,Detailed,Other,Unknown Traffic Path
10.0.6.205,34.237.177.62,Client_port,443,10.0.6.205,34.237.177.62,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,341722,2536,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.182.117,10.0.67.138,443,Client_port,3.218.182.117,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,339864,304,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,44.215.78.151,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,339794,992,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.107,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,339604,1409,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.52.161,443,Client_port,3.239.232.107,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,339604,1409,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,35.154.158.236,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,339534,588,Detailed,Other,Unknown Traffic Path
35.154.158.236,10.0.67.138,443,Client_port,35.154.158.236,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,339534,588,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.145,Client_port,443,10.0.67.138,3.218.182.145,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,339516,313,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,3.218.181.173,Client_port,443,10.0.82.141,3.218.181.173,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,337849,318,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.67.138,443,Client_port,34.229.28.141,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,334908,1019,Detailed,Other,Unknown Traffic Path
3.94.239.84,10.0.6.205,443,Client_port,3.94.239.84,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,331233,422,Detailed,Other,Unknown Traffic Path
3.218.182.104,10.0.67.138,443,Client_port,3.218.182.104,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,327368,318,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.236.169.126,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,326133,1382,Detailed,Other,Unknown Traffic Path
3.218.180.103,10.0.52.161,443,Client_port,3.218.180.103,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,322305,292,Detailed,Other,Unknown Traffic Path
3.239.232.70,10.0.6.205,443,Client_port,3.239.232.70,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,316405,1192,Detailed,Other,Unknown Traffic Path
34.207.48.146,10.0.67.138,443,Client_port,34.207.48.146,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,312750,1032,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,34.207.48.146,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,312750,1032,Detailed,Other,Unknown Traffic Path
3.239.232.181,10.0.82.141,443,Client_port,3.239.232.181,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,309812,1275,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.181,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,309812,1275,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,308287,381,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.0,Client_port,443,10.0.82.141,3.239.232.0,subnet-0f90780670d905556,egress,VPC,AMAZON,1,308287,381,Detailed,Other,Unknown Traffic Path
3.218.180.153,10.0.52.161,443,Client_port,3.218.180.153,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,305742,284,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.156,Client_port,443,10.0.82.141,3.218.181.156,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,305375,283,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,3.218.182.104,Client_port,443,10.0.67.138,3.218.182.104,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,303627,284,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
122.226.191.252,10.0.6.205,Client_port,23,122.226.191.252,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,303400,7585,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.203.162.156,Client_port,443,10.0.6.205,52.203.162.156,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,302734,1816,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,52.119.228.102,Client_port,443,10.0.67.138,52.119.228.102,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,300860,311,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
13.126.192.187,10.0.52.161,443,Client_port,13.126.192.187,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,300376,545,Detailed,Other,Unknown Traffic Path
10.0.67.138,44.215.78.151,Client_port,443,10.0.67.138,44.215.78.151,subnet-00934156b7ada087f,egress,VPC,EC2,1,295588,1980,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,295588,1980,Detailed,Other,Unknown Traffic Path
3.239.232.78,10.0.52.161,443,Client_port,3.239.232.78,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,294386,1250,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.78,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,294386,1250,Detailed,Other,Unknown Traffic Path
35.154.158.236,10.0.82.141,443,Client_port,35.154.158.236,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,293243,495,Detailed,Other,Unknown Traffic Path
3.239.232.213,10.0.82.141,443,Client_port,3.239.232.213,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,291790,1239,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.213,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,291790,1239,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.117,Client_port,443,10.0.67.138,3.218.182.117,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,290955,259,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.156,10.0.82.141,443,Client_port,3.218.181.156,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,290506,305,Detailed,Other,Unknown Traffic Path
52.203.162.156,10.0.82.141,443,Client_port,52.203.162.156,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,287319,817,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,52.203.162.156,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,287319,817,Detailed,Other,Unknown Traffic Path
52.119.228.102,10.0.67.138,443,Client_port,52.119.228.102,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,287127,285,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,13.126.192.187,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,286679,522,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.78,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,285984,1166,Detailed,Other,Unknown Traffic Path
3.239.232.78,10.0.67.138,443,Client_port,3.239.232.78,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,285984,1166,Detailed,Other,Unknown Traffic Path
52.86.65.104,10.0.6.205,443,Client_port,52.86.65.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,285862,856,Detailed,Other,Unknown Traffic Path
15.206.245.253,10.0.67.138,443,Client_port,15.206.245.253,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,285613,509,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,15.206.245.253,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,285613,509,Detailed,Other,Unknown Traffic Path
52.119.234.14,10.0.52.161,443,Client_port,52.119.234.14,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,282805,242,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.119.234.14,Client_port,443,10.0.52.161,52.119.234.14,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,281213,252,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
34.202.28.68,10.0.82.141,443,Client_port,34.202.28.68,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,279991,863,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,35.154.158.236,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,276378,469,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.180,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,274141,1160,Detailed,Other,Unknown Traffic Path
3.239.232.180,10.0.52.161,443,Client_port,3.239.232.180,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,274141,1160,Detailed,Other,Unknown Traffic Path
3.239.232.114,10.0.82.141,443,Client_port,3.239.232.114,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,272546,1143,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.114,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,272546,1143,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.103,Client_port,443,10.0.52.161,3.218.180.103,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,270478,241,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.82,10.0.67.138,443,Client_port,3.239.232.82,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,267265,1096,Detailed,Other,Unknown Traffic Path
3.218.181.173,10.0.82.141,443,Client_port,3.218.181.173,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,266624,284,Detailed,Other,Unknown Traffic Path
52.119.234.26,10.0.67.138,443,Client_port,52.119.234.26,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,264968,245,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.153,Client_port,443,10.0.52.161,3.218.180.153,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,262630,227,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.82.141,443,Client_port,34.202.28.68,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,260921,810,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.0,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,260480,1096,Detailed,Other,Unknown Traffic Path
3.239.232.0,10.0.67.138,443,Client_port,3.239.232.0,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,260480,1096,Detailed,Other,Unknown Traffic Path
3.236.169.126,10.0.67.138,443,Client_port,3.236.169.126,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,259288,1033,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.236.169.126,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,259288,1033,Detailed,Other,Unknown Traffic Path
3.219.63.228,10.0.6.205,443,Client_port,3.219.63.228,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,253231,724,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.234.26,Client_port,443,10.0.67.138,52.119.234.26,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,251096,233,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,245934,314,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.236.169.126,Client_port,443,10.0.52.161,3.236.169.126,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,245934,314,Detailed,Other,Unknown Traffic Path
10.0.6.205,35.154.158.236,Client_port,443,10.0.6.205,35.154.158.236,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,244383,949,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.228.222,10.0.67.138,443,Client_port,52.119.228.222,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,233104,194,Detailed,Other,Unknown Traffic Path
52.203.162.156,10.0.67.138,443,Client_port,52.203.162.156,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,232606,660,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,52.203.162.156,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,232478,658,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,231222,275,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.239.232.240,Client_port,443,10.0.67.138,3.239.232.240,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,231222,275,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.151,Client_port,443,10.0.82.141,3.218.181.151,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,231100,238,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
18.233.11.67,10.0.52.161,443,Client_port,18.233.11.67,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,229875,696,Detailed,Other,Unknown Traffic Path
52.200.147.156,10.0.6.205,443,Client_port,52.200.147.156,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,225587,285,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,18.233.11.67,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,223704,687,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.132,Client_port,443,10.0.82.141,3.218.181.132,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,223264,217,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,52.119.232.242,Client_port,443,10.0.82.141,52.119.232.242,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,220465,203,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,34.229.28.141,Client_port,443,10.0.82.141,34.229.28.141,subnet-0f90780670d905556,egress,VPC,EC2,1,219959,1426,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.82,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,218835,893,Detailed,Other,Unknown Traffic Path
10.0.6.205,15.206.245.253,Client_port,443,10.0.6.205,15.206.245.253,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,216741,815,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.216,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,215043,912,Detailed,Other,Unknown Traffic Path
3.239.232.216,10.0.82.141,443,Client_port,3.239.232.216,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,215043,912,Detailed,Other,Unknown Traffic Path
15.206.245.253,10.0.82.141,443,Client_port,15.206.245.253,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,213144,374,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,3.85.58.70,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,212651,264,Detailed,Other,Unknown Traffic Path
3.85.58.70,10.0.92.77,443,Client_port,3.85.58.70,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,212651,264,Detailed,Other,Unknown Traffic Path
44.218.2.19,10.0.66.24,443,Client_port,44.218.2.19,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,211062,270,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,44.218.2.19,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,211062,270,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.213.207.164,Client_port,443,10.0.67.138,3.213.207.164,subnet-00934156b7ada087f,egress,VPC,EC2,1,210082,1733,Detailed,Other,Unknown Traffic Path
10.0.52.161,34.202.28.68,Client_port,443,10.0.52.161,34.202.28.68,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,208918,1801,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,208814,1798,Detailed,Other,Unknown Traffic Path
52.86.65.104,10.0.67.138,443,Client_port,52.86.65.104,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,207831,624,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,52.86.65.104,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,207831,624,Detailed,Other,Unknown Traffic Path
15.206.245.253,10.0.52.161,443,Client_port,15.206.245.253,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,207456,355,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.228.222,Client_port,443,10.0.67.138,52.119.228.222,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,204743,183,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
44.218.109.122,10.0.6.205,443,Client_port,44.218.109.122,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,204557,259,Detailed,Other,Unknown Traffic Path
67.220.247.33,10.0.6.205,443,Client_port,67.220.247.33,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,203037,883,Detailed,Other,Unknown Traffic Path
3.218.181.180,10.0.92.77,443,Client_port,3.218.181.180,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,202421,146,Detailed,Other,Unknown Traffic Path
52.119.234.0,10.0.52.161,443,Client_port,52.119.234.0,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,202040,174,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.78,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,201916,838,Detailed,Other,Unknown Traffic Path
3.239.232.78,10.0.82.141,443,Client_port,3.239.232.78,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,201916,838,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,34.229.28.141,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,199931,1293,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,199329,1337,Detailed,Other,Unknown Traffic Path
10.0.82.141,44.215.78.151,Client_port,443,10.0.82.141,44.215.78.151,subnet-0f90780670d905556,egress,VPC,EC2,1,199329,1339,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.119.234.80,Client_port,443,10.0.52.161,52.119.234.80,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,197839,206,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.52.161,443,Client_port,15.206.245.253,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,194073,331,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,34.237.177.62,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,192451,550,Detailed,Other,Unknown Traffic Path
34.237.177.62,10.0.67.138,443,Client_port,34.237.177.62,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,192451,550,Detailed,Other,Unknown Traffic Path
52.46.143.211,10.0.6.205,443,Client_port,52.46.143.211,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,190868,854,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.180.177,Client_port,443,10.0.67.138,3.218.180.177,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,190803,189,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.92.77,443,Client_port,54.144.248.163,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,189854,241,Detailed,Other,Unknown Traffic Path
54.144.248.163,10.0.92.77,443,Client_port,54.144.248.163,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,189854,241,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.181.12,Client_port,443,10.0.67.138,3.218.181.12,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,189470,180,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,189125,1608,Detailed,Other,Unknown Traffic Path
44.218.2.19,10.0.92.77,443,Client_port,44.218.2.19,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,188191,246,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,35.154.158.236,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,185239,346,Detailed,Other,Unknown Traffic Path
35.154.158.236,10.0.52.161,443,Client_port,35.154.158.236,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,185239,346,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,15.206.245.253,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,184481,327,Detailed,Other,Unknown Traffic Path
3.218.181.132,10.0.82.141,443,Client_port,3.218.181.132,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,183904,204,Detailed,Other,Unknown Traffic Path
52.46.143.211,10.0.82.141,443,Client_port,52.46.143.211,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,183705,831,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,52.46.143.211,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,183705,831,Detailed,Other,Unknown Traffic Path
3.239.232.70,10.0.67.138,443,Client_port,3.239.232.70,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,182875,755,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.70,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,182875,755,Detailed,Other,Unknown Traffic Path
3.239.232.7,10.0.52.161,443,Client_port,3.239.232.7,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,182579,735,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.7,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,182579,735,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,44.218.2.19,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,181738,236,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,67.220.247.33,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,181708,818,Detailed,Other,Unknown Traffic Path
67.220.247.33,10.0.67.138,443,Client_port,67.220.247.33,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,181708,818,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.181.184,Client_port,443,10.0.67.138,3.218.181.184,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,180121,168,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.12,10.0.67.138,443,Client_port,3.218.181.12,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,178898,192,Detailed,Other,Unknown Traffic Path
3.218.180.177,10.0.67.138,443,Client_port,3.218.180.177,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,178854,188,Detailed,Other,Unknown Traffic Path
35.171.174.60,10.0.66.24,443,Client_port,35.171.174.60,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,177022,222,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,35.171.174.60,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,177022,222,Detailed,Other,Unknown Traffic Path
52.119.232.242,10.0.82.141,443,Client_port,52.119.232.242,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,176210,175,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.121,Client_port,443,10.0.52.161,3.218.180.121,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,175653,181,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.203.162.156,10.0.52.161,443,Client_port,52.203.162.156,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,175477,497,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,52.203.162.156,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,175477,497,Detailed,Other,Unknown Traffic Path
35.171.174.60,10.0.92.77,443,Client_port,35.171.174.60,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,175307,226,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,35.171.174.60,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,175307,226,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.119.232.78,Client_port,443,10.0.82.141,52.119.232.78,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,174105,178,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,52.119.234.0,Client_port,443,10.0.52.161,52.119.234.0,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,169920,158,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.184,10.0.67.138,443,Client_port,3.218.181.184,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,168221,181,Detailed,Other,Unknown Traffic Path
3.239.232.240,10.0.82.141,443,Client_port,3.239.232.240,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,167941,653,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.240,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,167941,653,Detailed,Other,Unknown Traffic Path
10.0.6.205,18.233.11.67,Client_port,443,10.0.6.205,18.233.11.67,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,167047,1228,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.19,10.0.52.161,443,Client_port,3.239.232.19,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,164722,641,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.19,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,164722,641,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.181,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,164252,693,Detailed,Other,Unknown Traffic Path
3.239.232.181,10.0.52.161,443,Client_port,3.239.232.181,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,164252,693,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.219.63.228,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,164028,478,Detailed,Other,Unknown Traffic Path
3.219.63.228,10.0.67.138,443,Client_port,3.219.63.228,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,164028,478,Detailed,Other,Unknown Traffic Path
3.218.181.151,10.0.82.141,443,Client_port,3.218.181.151,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,163131,214,Detailed,Other,Unknown Traffic Path
34.207.48.146,10.0.82.141,443,Client_port,34.207.48.146,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,162558,515,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,34.207.48.146,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,162558,515,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.213.207.164,Client_port,443,10.0.52.161,3.213.207.164,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,160745,1231,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.239.232.70,Client_port,443,10.0.82.141,3.239.232.70,subnet-0f90780670d905556,egress,VPC,AMAZON,1,159773,190,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.239.232.70,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,159773,190,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.67.138,443,Client_port,10.0.59.76,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,159631,433,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.67.138,443,Client_port,10.0.59.76,10.0.67.138,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,159631,433,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.131,Client_port,443,10.0.52.161,3.218.180.131,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,159037,158,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.119.234.80,10.0.52.161,443,Client_port,52.119.234.80,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,158394,184,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.119.224.100,Client_port,443,10.0.67.138,52.119.224.100,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,157662,158,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
211.105.137.210,10.0.6.205,Client_port,23,211.105.137.210,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,156840,3921,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,18.233.11.67,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,156364,470,Detailed,Other,Unknown Traffic Path
18.233.11.67,10.0.67.138,443,Client_port,18.233.11.67,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,156364,470,Detailed,Other,Unknown Traffic Path
10.0.66.24,52.119.226.80,Client_port,443,10.0.66.24,52.119.226.80,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,155067,208,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.66.24,443,Client_port,54.144.248.163,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,154329,201,Detailed,Other,Unknown Traffic Path
54.144.248.163,10.0.66.24,443,Client_port,54.144.248.163,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,154329,201,Detailed,Other,Unknown Traffic Path
10.0.82.141,34.237.177.62,Client_port,443,10.0.82.141,34.237.177.62,subnet-0f90780670d905556,egress,VPC,EC2,1,153599,1151,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,152812,1218,Detailed,Other,Unknown Traffic Path
10.0.58.37,3.218.180.109,Client_port,443,10.0.58.37,3.218.180.109,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,152679,202,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,34.200.67.142,Client_port,443,10.0.6.205,34.200.67.142,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,152346,973,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.180.121,10.0.52.161,443,Client_port,3.218.180.121,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,149390,173,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,54.86.10.247,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,149234,442,Detailed,Other,Unknown Traffic Path
54.86.10.247,10.0.6.205,443,Client_port,54.86.10.247,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,149234,442,Detailed,Other,Unknown Traffic Path
54.86.10.247,10.0.67.138,443,Client_port,54.86.10.247,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,149234,442,Detailed,Other,Unknown Traffic Path
34.234.11.86,10.0.6.205,443,Client_port,34.234.11.86,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,147220,357,Detailed,Other,Unknown Traffic Path
10.0.6.205,44.218.2.19,Client_port,443,10.0.6.205,44.218.2.19,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,145296,610,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.209.244.110,10.0.6.205,443,Client_port,3.209.244.110,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,145282,406,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,144696,1133,Detailed,Other,Unknown Traffic Path
52.119.224.100,10.0.67.138,443,Client_port,52.119.224.100,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,144099,163,Detailed,Other,Unknown Traffic Path
67.220.245.24,10.0.6.205,443,Client_port,67.220.245.24,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,144029,409,Detailed,Other,Unknown Traffic Path
10.0.67.138,13.126.192.187,Client_port,443,10.0.67.138,13.126.192.187,subnet-00934156b7ada087f,egress,VPC,EC2,1,143742,546,Detailed,Other,Unknown Traffic Path
10.0.52.161,44.215.78.151,Client_port,443,10.0.52.161,44.215.78.151,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,142549,954,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,142549,954,Detailed,Other,Unknown Traffic Path
52.46.159.244,10.0.6.205,443,Client_port,52.46.159.244,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,142548,394,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,3.94.239.84,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,141223,178,Detailed,Other,Unknown Traffic Path
3.94.239.84,10.0.92.77,443,Client_port,3.94.239.84,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,141223,178,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,139676,530,Detailed,Other,Unknown Traffic Path
34.200.67.142,10.0.52.161,443,Client_port,34.200.67.142,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,139345,419,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,34.200.67.142,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,139345,419,Detailed,Other,Unknown Traffic Path
3.239.232.213,10.0.52.161,443,Client_port,3.239.232.213,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,137915,545,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.213,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,137915,545,Detailed,Other,Unknown Traffic Path
52.119.232.78,10.0.82.141,443,Client_port,52.119.232.78,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,137712,157,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.67.138,443,Client_port,10.0.76.12,10.0.67.138,subnet-00934156b7ada087f,egress,VPC,VPC,1,137248,367,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.67.138,443,Client_port,10.0.76.12,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,137248,367,Detailed,Other,Unknown Traffic Path
10.0.6.205,54.144.248.163,Client_port,443,10.0.6.205,54.144.248.163,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,135626,563,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,10.0.59.76,Client_port,443,10.0.67.138,10.0.59.76,subnet-00934156b7ada087f,egress,VPC,VPC,1,133340,369,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.59.76,Client_port,443,10.0.67.138,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,133340,369,Detailed,Other,Unknown Traffic Path
3.218.180.131,10.0.52.161,443,Client_port,3.218.180.131,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,129720,155,Detailed,Other,Unknown Traffic Path
10.0.6.205,34.207.48.146,Client_port,443,10.0.6.205,34.207.48.146,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,127784,1255,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.198.91,10.0.6.205,443,Client_port,52.119.198.91,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,127366,355,Detailed,Other,Unknown Traffic Path
3.94.239.84,10.0.66.24,443,Client_port,3.94.239.84,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,126624,162,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,3.94.239.84,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,126624,162,Detailed,Other,Unknown Traffic Path
3.239.232.89,10.0.67.138,443,Client_port,3.239.232.89,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,125782,523,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.89,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,125782,523,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,67.220.246.91,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,125672,572,Detailed,Other,Unknown Traffic Path
67.220.246.91,10.0.82.141,443,Client_port,67.220.246.91,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,125672,572,Detailed,Other,Unknown Traffic Path
67.220.246.91,10.0.6.205,443,Client_port,67.220.246.91,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,125672,572,Detailed,Other,Unknown Traffic Path
3.218.180.110,10.0.52.161,443,Client_port,3.218.180.110,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,124924,131,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.52.161,443,Client_port,10.0.59.76,10.0.52.161,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,124436,337,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.52.161,443,Client_port,10.0.59.76,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,124436,337,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.219.63.228,Client_port,443,10.0.6.205,3.219.63.228,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,123713,683,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,34.229.28.141,Client_port,443,10.0.67.138,34.229.28.141,subnet-00934156b7ada087f,egress,VPC,EC2,1,122771,947,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.229.28.141,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,122771,950,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,122440,852,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.213.207.164,Client_port,443,10.0.82.141,3.213.207.164,subnet-0f90780670d905556,egress,VPC,EC2,1,122440,851,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.203.162.156,Client_port,443,10.0.82.141,52.203.162.156,subnet-0f90780670d905556,egress,VPC,EC2,1,121463,782,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,121463,782,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,3.209.244.110,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,119456,340,Detailed,Other,Unknown Traffic Path
3.209.244.110,10.0.67.138,443,Client_port,3.209.244.110,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,119456,340,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.110,Client_port,443,10.0.52.161,3.218.180.110,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,119294,107,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.200.147.156,10.0.92.77,443,Client_port,52.200.147.156,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,118530,157,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,52.200.147.156,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,118530,157,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.178,Client_port,443,10.0.82.141,3.218.181.178,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,117923,138,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,35.171.174.60,Client_port,443,10.0.6.205,35.171.174.60,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,116538,483,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,3.218.180.188,Client_port,443,10.0.52.161,3.218.180.188,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,116141,124,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.92.215,10.0.82.141,443,Client_port,10.0.92.215,10.0.82.141,subnet-0f90780670d905556,egress,VPC,VPC,1,115298,322,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.82.141,443,Client_port,10.0.92.215,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,115298,322,Detailed,Other,Unknown Traffic Path
10.0.67.138,34.202.28.68,Client_port,443,10.0.67.138,34.202.28.68,subnet-00934156b7ada087f,egress,VPC,EC2,1,112224,852,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,112224,851,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,3.85.58.70,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,112047,146,Detailed,Other,Unknown Traffic Path
3.85.58.70,10.0.66.24,443,Client_port,3.85.58.70,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,112047,146,Detailed,Other,Unknown Traffic Path
44.218.109.122,10.0.66.24,443,Client_port,44.218.109.122,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,111973,145,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,44.218.109.122,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,111973,145,Detailed,Other,Unknown Traffic Path
34.200.67.142,10.0.82.141,443,Client_port,34.200.67.142,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,111716,314,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,34.200.67.142,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,111716,314,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.180.148,Client_port,443,10.0.67.138,3.218.180.148,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,111669,106,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,13.126.192.187,Client_port,443,10.0.82.141,13.126.192.187,subnet-0f90780670d905556,egress,VPC,EC2,1,110654,422,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,110654,422,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.113,Client_port,443,10.0.52.161,3.218.180.113,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,110497,118,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,3.218.181.112,Client_port,443,10.0.82.141,3.218.181.112,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,110460,107,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,34.237.177.62,Client_port,443,10.0.52.161,34.237.177.62,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,109939,921,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,109939,921,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.119.232.148,Client_port,443,10.0.82.141,52.119.232.148,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,108612,111,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.92.215,10.0.67.138,443,Client_port,10.0.92.215,10.0.67.138,subnet-0f90780670d905556,egress,VPC,VPC,1,107994,306,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.67.138,443,Client_port,10.0.92.215,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,107994,306,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.85.58.70,Client_port,443,10.0.6.205,3.85.58.70,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,107452,448,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,10.0.92.215,Client_port,443,10.0.82.141,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,107254,295,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.82.141,443,Client_port,10.0.76.12,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,105957,296,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.82.141,443,Client_port,10.0.76.12,10.0.82.141,subnet-00934156b7ada087f,egress,VPC,VPC,1,105957,296,Detailed,Other,Unknown Traffic Path
54.144.248.163,10.0.58.37,443,Client_port,54.144.248.163,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,105468,134,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,443,Client_port,54.144.248.163,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,105468,134,Detailed,Other,Unknown Traffic Path
52.46.141.158,10.0.6.205,443,Client_port,52.46.141.158,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,103773,276,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.92.215,Client_port,443,10.0.82.141,10.0.92.215,subnet-0f90780670d905556,egress,VPC,VPC,1,103748,280,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.86.65.104,Client_port,443,10.0.6.205,52.86.65.104,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,103699,789,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.0,10.0.52.161,443,Client_port,3.239.232.0,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,103574,414,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.239.232.0,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,103574,414,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.0,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,101559,395,Detailed,Other,Unknown Traffic Path
3.239.232.0,10.0.82.141,443,Client_port,3.239.232.0,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,101559,395,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,101050,394,Detailed,Other,Unknown Traffic Path
10.0.67.138,35.154.158.236,Client_port,443,10.0.67.138,35.154.158.236,subnet-00934156b7ada087f,egress,VPC,EC2,1,101050,394,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.92.215,Client_port,443,10.0.67.138,10.0.92.215,subnet-00934156b7ada087f,egress,VPC,VPC,1,100410,271,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.92.215,Client_port,443,10.0.67.138,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,100410,271,Detailed,Other,Unknown Traffic Path
34.200.67.142,10.0.67.138,443,Client_port,34.200.67.142,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,99982,271,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,34.200.67.142,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,99982,271,Detailed,Other,Unknown Traffic Path
10.0.52.161,3.218.180.175,Client_port,443,10.0.52.161,3.218.180.175,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,99818,101,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.180.175,10.0.52.161,443,Client_port,3.218.180.175,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,98901,108,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.12,Client_port,443,10.0.67.138,3.218.182.12,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,98018,104,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,3.94.239.84,Client_port,443,10.0.6.205,3.94.239.84,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,97994,409,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,13.126.192.187,Client_port,443,10.0.52.161,13.126.192.187,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,97789,380,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,97789,380,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.76.12,Client_port,443,10.0.67.138,10.0.76.12,subnet-00934156b7ada087f,egress,VPC,VPC,1,96935,309,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.76.12,Client_port,443,10.0.67.138,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,96935,309,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.52.161,443,Client_port,10.0.92.215,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,96756,267,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.52.161,443,Client_port,10.0.92.215,10.0.52.161,subnet-0f90780670d905556,egress,VPC,VPC,1,96756,267,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,34.200.53.255,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,96345,302,Detailed,Other,Unknown Traffic Path
34.200.53.255,10.0.6.205,443,Client_port,34.200.53.255,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,96345,302,Detailed,Other,Unknown Traffic Path
34.200.53.255,10.0.82.141,443,Client_port,34.200.53.255,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,96345,302,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.52.161,443,Client_port,10.0.76.12,10.0.52.161,subnet-00934156b7ada087f,egress,VPC,VPC,1,94856,260,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.52.161,443,Client_port,10.0.76.12,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,94856,260,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.82.141,443,Client_port,10.0.59.76,10.0.82.141,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,94752,258,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.82.141,443,Client_port,10.0.59.76,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,94752,258,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.59.76,Client_port,443,10.0.52.161,10.0.59.76,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,94449,283,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.59.76,Client_port,443,10.0.52.161,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,94449,283,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,93616,345,Detailed,Other,Unknown Traffic Path
10.0.67.138,15.206.245.253,Client_port,443,10.0.67.138,15.206.245.253,subnet-00934156b7ada087f,egress,VPC,EC2,1,93616,345,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.76.12,Client_port,443,10.0.82.141,10.0.76.12,subnet-0f90780670d905556,egress,VPC,VPC,1,92987,249,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.76.12,Client_port,443,10.0.82.141,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,92987,249,Detailed,Other,Unknown Traffic Path
18.233.11.67,10.0.82.141,443,Client_port,18.233.11.67,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,92727,302,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,18.233.11.67,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,92727,302,Detailed,Other,Unknown Traffic Path
10.0.67.138,52.203.162.156,Client_port,443,10.0.67.138,52.203.162.156,subnet-00934156b7ada087f,egress,VPC,EC2,1,92222,544,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,92222,543,Detailed,Other,Unknown Traffic Path
52.5.63.226,10.0.67.138,443,Client_port,52.5.63.226,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,91531,284,Detailed,Other,Unknown Traffic Path
52.5.63.226,10.0.6.205,443,Client_port,52.5.63.226,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,91531,284,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,52.5.63.226,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,91531,284,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,34.229.28.141,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,91454,276,Detailed,Other,Unknown Traffic Path
34.229.28.141,10.0.52.161,443,Client_port,34.229.28.141,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,91454,276,Detailed,Other,Unknown Traffic Path
10.0.6.205,34.234.11.86,Client_port,443,10.0.6.205,34.234.11.86,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,91355,371,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.234.161.29,10.0.6.205,443,Client_port,3.234.161.29,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,90965,287,Detailed,Other,Unknown Traffic Path
34.234.11.86,10.0.67.138,443,Client_port,34.234.11.86,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,89996,225,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,34.234.11.86,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,89996,225,Detailed,Other,Unknown Traffic Path
3.226.114.224,10.0.6.205,443,Client_port,3.226.114.224,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,89202,290,Detailed,Other,Unknown Traffic Path
3.226.114.224,10.0.82.141,443,Client_port,3.226.114.224,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,89202,290,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.226.114.224,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,89202,290,Detailed,Other,Unknown Traffic Path
3.236.169.126,10.0.52.161,443,Client_port,3.236.169.126,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,89201,337,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.236.169.126,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,89201,338,Detailed,Other,Unknown Traffic Path
10.0.52.161,52.203.162.156,Client_port,443,10.0.52.161,52.203.162.156,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,89049,490,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,89049,490,Detailed,Other,Unknown Traffic Path
3.218.180.113,10.0.52.161,443,Client_port,3.218.180.113,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,88133,103,Detailed,Other,Unknown Traffic Path
67.220.244.190,10.0.6.205,443,Client_port,67.220.244.190,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,87779,243,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.46.159.244,Client_port,443,10.0.6.205,52.46.159.244,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,87145,266,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,34.237.177.62,Client_port,443,10.0.67.138,34.237.177.62,subnet-00934156b7ada087f,egress,VPC,EC2,1,87087,484,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,87087,484,Detailed,Other,Unknown Traffic Path
3.218.181.178,10.0.82.141,443,Client_port,3.218.181.178,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,86253,125,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,85232,335,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,18.233.11.67,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,85232,624,Detailed,Other,Unknown Traffic Path
10.0.82.141,35.154.158.236,Client_port,443,10.0.82.141,35.154.158.236,subnet-0f90780670d905556,egress,VPC,EC2,1,85232,335,Detailed,Other,Unknown Traffic Path
10.0.52.161,18.233.11.67,Client_port,443,10.0.52.161,18.233.11.67,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,85232,624,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.234.161.29,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,83861,273,Detailed,Other,Unknown Traffic Path
3.234.161.29,10.0.82.141,443,Client_port,3.234.161.29,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,83861,273,Detailed,Other,Unknown Traffic Path
50.16.180.250,10.0.6.205,443,Client_port,50.16.180.250,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,83780,262,Detailed,Other,Unknown Traffic Path
54.226.219.31,10.0.6.205,443,Client_port,54.226.219.31,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,82719,257,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,443,Client_port,54.226.219.31,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,82719,257,Detailed,Other,Unknown Traffic Path
54.226.219.31,10.0.67.138,443,Client_port,54.226.219.31,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,82719,257,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.92.215,Client_port,443,10.0.52.161,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,82694,224,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.92.215,Client_port,443,10.0.52.161,10.0.92.215,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,82694,224,Detailed,Other,Unknown Traffic Path
52.119.232.208,10.0.92.77,443,Client_port,52.119.232.208,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,82367,62,Detailed,Other,Unknown Traffic Path
3.234.161.29,10.0.67.138,443,Client_port,3.234.161.29,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,82111,254,Detailed,Other,Unknown Traffic Path
10.0.67.138,34.207.48.146,Client_port,443,10.0.67.138,34.207.48.146,subnet-00934156b7ada087f,egress,VPC,EC2,1,81042,776,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.207.48.146,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,81042,775,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.94.238,443,Client_port,3.239.232.34,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,80445,225,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.34,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,80445,225,Detailed,Other,Unknown Traffic Path
10.0.82.141,34.202.28.68,Client_port,443,10.0.82.141,34.202.28.68,subnet-0f90780670d905556,egress,VPC,EC2,1,79178,603,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,79178,603,Detailed,Other,Unknown Traffic Path
10.0.6.205,67.220.245.24,Client_port,443,10.0.6.205,67.220.245.24,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,79032,245,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.58.37,3.218.180.102,Client_port,443,10.0.58.37,3.218.180.102,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,78123,106,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.82.141,443,Client_port,52.86.65.104,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,78031,232,Detailed,Other,Unknown Traffic Path
52.86.65.104,10.0.82.141,443,Client_port,52.86.65.104,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,78031,232,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.92.77,443,Client_port,10.0.92.215,10.0.92.77,subnet-0f90780670d905556,ingress,VPC,VPC,,77918,200,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.92.77,443,Client_port,10.0.92.215,10.0.92.77,subnet-0f90780670d905556,egress,VPC,VPC,1,77918,200,Detailed,Other,Unknown Traffic Path
3.218.180.188,10.0.52.161,443,Client_port,3.218.180.188,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,77876,104,Detailed,Other,Unknown Traffic Path
52.200.147.156,10.0.66.24,443,Client_port,52.200.147.156,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,77859,96,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,443,Client_port,52.200.147.156,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,77859,96,Detailed,Other,Unknown Traffic Path
67.220.244.191,10.0.6.205,443,Client_port,67.220.244.191,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,77222,218,Detailed,Other,Unknown Traffic Path
52.45.125.112,10.0.52.161,443,Client_port,52.45.125.112,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,77042,237,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,52.45.125.112,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,77042,237,Detailed,Other,Unknown Traffic Path
52.45.125.112,10.0.6.205,443,Client_port,52.45.125.112,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,77042,237,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.219.63.228,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,77017,444,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.219.63.228,Client_port,443,10.0.67.138,3.219.63.228,subnet-00934156b7ada087f,egress,VPC,EC2,1,77017,444,Detailed,Other,Unknown Traffic Path
44.218.2.19,10.0.58.37,443,Client_port,44.218.2.19,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,76344,103,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,443,Client_port,44.218.2.19,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,76344,103,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.76.12,Client_port,443,10.0.52.161,10.0.76.12,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,76159,222,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.76.12,Client_port,443,10.0.52.161,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,76159,222,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.59.76,Client_port,443,10.0.82.141,10.0.59.76,subnet-0f90780670d905556,egress,VPC,VPC,1,75635,213,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.59.76,Client_port,443,10.0.82.141,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,75635,213,Detailed,Other,Unknown Traffic Path
3.239.232.78,10.0.56.117,443,Client_port,3.239.232.78,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,75139,213,Detailed,Other,Unknown Traffic Path
3.239.232.11,10.0.94.238,443,Client_port,3.239.232.11,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,74742,212,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.11,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,74742,212,Detailed,Other,Unknown Traffic Path
3.218.180.148,10.0.67.138,443,Client_port,3.218.180.148,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,74716,95,Detailed,Other,Unknown Traffic Path
52.119.232.148,10.0.82.141,443,Client_port,52.119.232.148,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,74396,93,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.125,Client_port,443,10.0.82.141,3.218.181.125,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,74172,67,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,3.209.244.110,Client_port,443,10.0.6.205,3.209.244.110,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,74048,357,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.67.138,443,Client_port,3.239.232.240,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,71943,285,Detailed,Other,Unknown Traffic Path
3.239.232.240,10.0.67.138,443,Client_port,3.239.232.240,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,71943,285,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.181.112,Client_port,443,10.0.67.138,3.218.181.112,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,71726,65,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,52.86.65.104,Client_port,443,10.0.67.138,52.86.65.104,subnet-00934156b7ada087f,egress,VPC,EC2,1,71147,569,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,52.86.65.104,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,71147,569,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.66.24,443,Client_port,10.0.92.215,10.0.66.24,subnet-0f90780670d905556,egress,VPC,VPC,1,70532,176,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.66.24,443,Client_port,10.0.92.215,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,70532,176,Detailed,Other,Unknown Traffic Path
3.218.181.112,10.0.82.141,443,Client_port,3.218.181.112,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,70333,88,Detailed,Other,Unknown Traffic Path
3.218.181.179,10.0.93.202,443,Client_port,3.218.181.179,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,70198,106,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,443,Client_port,3.219.63.228,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,70153,193,Detailed,Other,Unknown Traffic Path
3.219.63.228,10.0.52.161,443,Client_port,3.219.63.228,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,70153,193,Detailed,Other,Unknown Traffic Path
3.218.181.136,10.0.93.202,443,Client_port,3.218.181.136,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,69994,103,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.180.157,Client_port,443,10.0.67.138,3.218.180.157,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,69056,76,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
67.220.243.238,10.0.6.205,443,Client_port,67.220.243.238,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,68636,188,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.180,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,68224,200,Detailed,Other,Unknown Traffic Path
3.239.232.180,10.0.94.238,443,Client_port,3.239.232.180,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,68224,200,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.119.198.91,Client_port,443,10.0.6.205,52.119.198.91,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,68199,227,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.78,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,67860,193,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.94.238,443,Client_port,3.239.232.19,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,67127,190,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.19,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,67127,190,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.200.147.156,Client_port,443,10.0.6.205,52.200.147.156,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,66378,276,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,15.206.245.253,Client_port,443,10.0.82.141,15.206.245.253,subnet-0f90780670d905556,egress,VPC,EC2,1,66165,251,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,66165,251,Detailed,Other,Unknown Traffic Path
10.0.82.141,3.218.181.185,Client_port,443,10.0.82.141,3.218.181.185,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,66066,62,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.182.12,10.0.67.138,443,Client_port,3.218.182.12,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,64208,94,Detailed,Other,Unknown Traffic Path
3.218.180.131,10.0.53.255,443,Client_port,3.218.180.131,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,64080,99,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,50.16.180.250,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,63992,205,Detailed,Other,Unknown Traffic Path
50.16.180.250,10.0.82.141,443,Client_port,50.16.180.250,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,63992,205,Detailed,Other,Unknown Traffic Path
3.218.180.125,10.0.53.255,443,Client_port,3.218.180.125,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63984,99,Detailed,Other,Unknown Traffic Path
3.218.180.141,10.0.53.255,443,Client_port,3.218.180.141,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63852,96,Detailed,Other,Unknown Traffic Path
52.119.226.80,10.0.66.24,443,Client_port,52.119.226.80,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,63800,144,Detailed,Other,Unknown Traffic Path
3.218.181.125,10.0.82.141,443,Client_port,3.218.181.125,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,63789,73,Detailed,Other,Unknown Traffic Path
3.218.180.120,10.0.53.255,443,Client_port,3.218.180.120,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63780,96,Detailed,Other,Unknown Traffic Path
3.218.180.105,10.0.53.255,443,Client_port,3.218.180.105,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63752,95,Detailed,Other,Unknown Traffic Path
10.0.6.205,54.86.10.247,Client_port,443,10.0.6.205,54.86.10.247,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,63741,295,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,54.86.10.247,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,63741,295,Detailed,Other,Unknown Traffic Path
10.0.67.138,54.86.10.247,Client_port,443,10.0.67.138,54.86.10.247,subnet-00934156b7ada087f,egress,VPC,EC2,1,63741,295,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.66.24,443,Client_port,10.0.59.76,10.0.66.24,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,63718,163,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.66.24,443,Client_port,10.0.59.76,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,63718,163,Detailed,Other,Unknown Traffic Path
3.218.180.109,10.0.58.37,443,Client_port,3.218.180.109,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63512,137,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,443,Client_port,3.94.239.84,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,63386,82,Detailed,Other,Unknown Traffic Path
3.94.239.84,10.0.58.37,443,Client_port,3.94.239.84,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,63386,82,Detailed,Other,Unknown Traffic Path
10.0.66.24,44.218.2.19,Client_port,443,10.0.66.24,44.218.2.19,subnet-00934156b7ada087f,egress,VPC,EC2,1,63356,268,Detailed,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,Client_port,443,10.0.66.24,44.218.2.19,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,63356,268,Detailed,Other,Unknown Traffic Path
44.213.45.216,10.0.6.205,Client_port,Client_port,44.213.45.216,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,63280,2260,Detailed,Other,Unknown Traffic Path
10.0.67.138,18.233.11.67,Client_port,443,10.0.67.138,18.233.11.67,subnet-00934156b7ada087f,egress,VPC,EC2,1,62412,376,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,18.233.11.67,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,62412,376,Detailed,Other,Unknown Traffic Path
10.0.52.161,35.154.158.236,Client_port,443,10.0.52.161,35.154.158.236,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,62069,235,Detailed,Other,Unknown Traffic Path
3.218.181.112,10.0.67.138,443,Client_port,3.218.181.112,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,61988,76,Detailed,Other,Unknown Traffic Path
52.46.145.233,10.0.6.205,443,Client_port,52.46.145.233,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,61662,170,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.56.117,443,Client_port,3.239.232.34,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,61152,174,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.34,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,61152,174,Detailed,Other,Unknown Traffic Path
10.0.52.161,15.206.245.253,Client_port,443,10.0.52.161,15.206.245.253,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,61018,234,Detailed,Other,Unknown Traffic Path
52.119.199.68,10.0.6.205,443,Client_port,52.119.199.68,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,60873,164,Detailed,Other,Unknown Traffic Path
10.0.92.77,3.85.58.70,Client_port,443,10.0.92.77,3.85.58.70,subnet-0f90780670d905556,egress,VPC,EC2,1,60206,253,Detailed,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,Client_port,443,10.0.92.77,3.85.58.70,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,60206,253,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.209.244.110,Client_port,443,10.0.67.138,3.209.244.110,subnet-00934156b7ada087f,egress,VPC,EC2,1,59916,295,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,3.209.244.110,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59916,295,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.68.125,443,Client_port,3.239.232.107,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,59854,169,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.107,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,59854,169,Detailed,Other,Unknown Traffic Path
10.0.6.205,44.218.109.122,Client_port,443,10.0.6.205,44.218.109.122,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,59846,249,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.92.77,10.0.6.205,Client_port,443,10.0.92.77,44.218.2.19,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59790,249,Detailed,Other,Unknown Traffic Path
10.0.92.77,44.218.2.19,Client_port,443,10.0.92.77,44.218.2.19,subnet-0f90780670d905556,egress,VPC,EC2,1,59790,249,Detailed,Other,Unknown Traffic Path
10.0.82.141,34.200.67.142,Client_port,443,10.0.82.141,34.200.67.142,subnet-0f90780670d905556,egress,VPC,EC2,1,59017,300,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59017,300,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.180,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58907,163,Detailed,Other,Unknown Traffic Path
3.239.232.180,10.0.56.117,443,Client_port,3.239.232.180,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,58907,163,Detailed,Other,Unknown Traffic Path
3.218.181.185,10.0.82.141,443,Client_port,3.218.181.185,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,58772,70,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.94.238,443,Client_port,3.239.232.107,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,58614,164,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.107,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58614,164,Detailed,Other,Unknown Traffic Path
3.239.232.0,10.0.56.117,443,Client_port,3.239.232.0,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,58556,164,Detailed,Other,Unknown Traffic Path
3.239.232.213,10.0.68.125,443,Client_port,3.239.232.213,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,58394,162,Detailed,Other,Unknown Traffic Path
3.239.232.9,10.0.68.125,443,Client_port,3.239.232.9,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,58394,162,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.9,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58394,162,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.213,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58394,162,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,58101,220,Detailed,Other,Unknown Traffic Path
3.218.180.12,10.0.53.255,443,Client_port,3.218.180.12,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57638,89,Detailed,Other,Unknown Traffic Path
3.218.181.109,10.0.93.202,443,Client_port,3.218.181.109,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57614,89,Detailed,Other,Unknown Traffic Path
3.218.181.101,10.0.93.202,443,Client_port,3.218.181.101,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57590,89,Detailed,Other,Unknown Traffic Path
3.218.181.192,10.0.93.202,443,Client_port,3.218.181.192,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57586,88,Detailed,Other,Unknown Traffic Path
3.218.180.180,10.0.53.255,443,Client_port,3.218.180.180,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57510,87,Detailed,Other,Unknown Traffic Path
3.218.180.181,10.0.53.255,443,Client_port,3.218.180.181,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57486,87,Detailed,Other,Unknown Traffic Path
3.218.181.154,10.0.93.202,443,Client_port,3.218.181.154,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57434,86,Detailed,Other,Unknown Traffic Path
3.218.180.14,10.0.53.255,443,Client_port,3.218.180.14,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57410,86,Detailed,Other,Unknown Traffic Path
3.218.180.159,10.0.53.255,443,Client_port,3.218.180.159,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57306,84,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,56960,219,Detailed,Other,Unknown Traffic Path
10.0.92.77,54.144.248.163,Client_port,443,10.0.92.77,54.144.248.163,subnet-0f90780670d905556,egress,VPC,EC2,1,56740,235,Detailed,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,Client_port,443,10.0.92.77,54.144.248.163,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,56740,235,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.92.77,443,Client_port,10.0.59.76,10.0.92.77,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,56436,141,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.92.77,443,Client_port,10.0.59.76,10.0.92.77,subnet-0f90780670d905556,ingress,VPC,VPC,,56436,141,Detailed,Other,Unknown Traffic Path
10.0.56.117,3.239.232.78,Client_port,443,10.0.56.117,3.239.232.78,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,55320,163,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.234.11.86,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,55099,229,Detailed,Other,Unknown Traffic Path
10.0.67.138,34.234.11.86,Client_port,443,10.0.67.138,34.234.11.86,subnet-00934156b7ada087f,egress,VPC,EC2,1,54995,227,Detailed,Other,Unknown Traffic Path
3.239.232.34,10.0.68.125,443,Client_port,3.239.232.34,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,53256,151,Detailed,Other,Unknown Traffic Path
3.239.232.70,10.0.68.125,443,Client_port,3.239.232.70,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,53250,152,Detailed,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,Client_port,443,10.0.92.77,35.171.174.60,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,53082,214,Detailed,Other,Unknown Traffic Path
10.0.92.77,35.171.174.60,Client_port,443,10.0.92.77,35.171.174.60,subnet-0f90780670d905556,egress,VPC,EC2,1,53082,214,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.56.117,443,Client_port,3.239.232.19,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,52891,149,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.19,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,52891,149,Detailed,Other,Unknown Traffic Path
52.119.199.54,10.0.6.205,443,Client_port,52.119.199.54,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,52758,149,Detailed,Other,Unknown Traffic Path
67.220.243.234,10.0.6.205,443,Client_port,67.220.243.234,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,52113,146,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.107,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,52004,148,Detailed,Other,Unknown Traffic Path
3.239.232.107,10.0.56.117,443,Client_port,3.239.232.107,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,52004,148,Detailed,Other,Unknown Traffic Path
10.0.6.205,3.234.161.29,Client_port,443,10.0.6.205,3.234.161.29,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,51531,489,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.94.238,3.239.232.34,Client_port,443,10.0.94.238,3.239.232.34,subnet-0f90780670d905556,egress,VPC,AMAZON,1,51424,167,Detailed,Other,Unknown Traffic Path
3.218.181.12,10.0.93.202,443,Client_port,3.218.181.12,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51300,81,Detailed,Other,Unknown Traffic Path
3.218.180.188,10.0.53.255,443,Client_port,3.218.180.188,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51272,80,Detailed,Other,Unknown Traffic Path
3.218.181.177,10.0.93.202,443,Client_port,3.218.181.177,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51248,80,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.0,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51225,143,Detailed,Other,Unknown Traffic Path
3.218.180.10,10.0.53.255,443,Client_port,3.218.180.10,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51220,79,Detailed,Other,Unknown Traffic Path
3.218.180.171,10.0.53.255,443,Client_port,3.218.180.171,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51196,79,Detailed,Other,Unknown Traffic Path
3.239.232.89,10.0.94.238,443,Client_port,3.239.232.89,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,51167,143,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,443,Client_port,3.239.232.89,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51167,143,Detailed,Other,Unknown Traffic Path
3.218.180.129,10.0.53.255,443,Client_port,3.218.180.129,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51128,77,Detailed,Other,Unknown Traffic Path
3.239.232.216,10.0.56.117,443,Client_port,3.239.232.216,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,51115,142,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.216,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51115,142,Detailed,Other,Unknown Traffic Path
3.218.180.135,10.0.53.255,443,Client_port,3.218.180.135,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51092,77,Detailed,Other,Unknown Traffic Path
3.218.180.158,10.0.53.255,443,Client_port,3.218.180.158,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,Detailed,Other,Unknown Traffic Path
3.218.180.106,10.0.53.255,443,Client_port,3.218.180.106,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,Detailed,Other,Unknown Traffic Path
3.218.180.186,10.0.53.255,443,Client_port,3.218.180.186,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,Detailed,Other,Unknown Traffic Path
3.218.181.104,10.0.93.202,443,Client_port,3.218.181.104,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51068,77,Detailed,Other,Unknown Traffic Path
3.218.180.143,10.0.53.255,443,Client_port,3.218.180.143,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51040,76,Detailed,Other,Unknown Traffic Path
3.218.181.162,10.0.93.202,443,Client_port,3.218.181.162,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51016,76,Detailed,Other,Unknown Traffic Path
3.218.181.18,10.0.93.202,443,Client_port,3.218.181.18,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51016,76,Detailed,Other,Unknown Traffic Path
3.218.180.136,10.0.53.255,443,Client_port,3.218.180.136,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,50964,75,Detailed,Other,Unknown Traffic Path
3.218.180.121,10.0.53.255,443,Client_port,3.218.180.121,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,50940,75,Detailed,Other,Unknown Traffic Path
10.0.66.24,35.171.174.60,Client_port,443,10.0.66.24,35.171.174.60,subnet-00934156b7ada087f,egress,VPC,EC2,1,50760,215,Detailed,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,Client_port,443,10.0.66.24,35.171.174.60,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,50760,215,Detailed,Other,Unknown Traffic Path
10.0.56.117,10.0.6.205,Client_port,443,10.0.56.117,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,50745,150,Detailed,Other,Unknown Traffic Path
3.218.181.115,10.0.93.202,443,Client_port,3.218.181.115,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,50736,72,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,44.218.109.122,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,50302,59,Detailed,Other,Unknown Traffic Path
44.218.109.122,10.0.92.77,443,Client_port,44.218.109.122,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,50302,59,Detailed,Other,Unknown Traffic Path
10.0.94.238,3.239.232.11,Client_port,443,10.0.94.238,3.239.232.11,subnet-0f90780670d905556,egress,VPC,AMAZON,1,50160,155,Detailed,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,Client_port,443,10.0.94.238,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,49745,154,Detailed,Other,Unknown Traffic Path
10.0.94.238,3.239.232.180,Client_port,443,10.0.94.238,3.239.232.180,subnet-0f90780670d905556,egress,VPC,AMAZON,1,49745,154,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.66.24,443,Client_port,10.0.76.12,10.0.66.24,subnet-00934156b7ada087f,egress,VPC,VPC,1,49362,123,Detailed,Other,Unknown Traffic Path
10.0.76.12,10.0.66.24,443,Client_port,10.0.76.12,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,49362,123,Detailed,Other,Unknown Traffic Path
3.239.232.70,10.0.82.141,443,Client_port,3.239.232.70,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,49087,195,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,443,Client_port,3.239.232.70,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,49087,195,Detailed,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,Client_port,443,10.0.67.138,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,48985,266,Detailed,Other,Unknown Traffic Path
10.0.67.138,34.200.67.142,Client_port,443,10.0.67.138,34.200.67.142,subnet-00934156b7ada087f,egress,VPC,EC2,1,48985,266,Detailed,Other,Unknown Traffic Path
10.0.6.205,67.220.244.190,Client_port,443,10.0.6.205,67.220.244.190,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,47944,149,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
13.214.173.166,10.0.6.205,Client_port,Client_port,13.214.173.166,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,47516,1697,Detailed,Other,Unknown Traffic Path
10.0.66.24,54.144.248.163,Client_port,443,10.0.66.24,54.144.248.163,subnet-00934156b7ada087f,egress,VPC,EC2,1,47330,197,Detailed,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,Client_port,443,10.0.66.24,54.144.248.163,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,47330,197,Detailed,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,Client_port,443,10.0.82.141,34.207.48.146,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,46742,480,Detailed,Other,Unknown Traffic Path
10.0.82.141,34.207.48.146,Client_port,443,10.0.82.141,34.207.48.146,subnet-0f90780670d905556,egress,VPC,EC2,1,46742,480,Detailed,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,Client_port,443,10.0.94.238,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,46709,152,Detailed,Other,Unknown Traffic Path
10.0.56.117,3.239.232.34,Client_port,443,10.0.56.117,3.239.232.34,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,46226,132,Detailed,Other,Unknown Traffic Path
10.0.56.117,10.0.6.205,Client_port,443,10.0.56.117,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,46226,132,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.34,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,46157,134,Detailed,Other,Unknown Traffic Path
10.0.94.238,3.239.232.19,Client_port,443,10.0.94.238,3.239.232.19,subnet-0f90780670d905556,egress,VPC,AMAZON,1,45993,136,Detailed,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,Client_port,443,10.0.94.238,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,45993,136,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.70,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,45971,132,Detailed,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,Client_port,443,10.0.94.238,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,45562,142,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.236.169.126,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,45392,127,Detailed,Other,Unknown Traffic Path
3.236.169.126,10.0.56.117,443,Client_port,3.236.169.126,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,45392,127,Detailed,Other,Unknown Traffic Path
3.218.181.105,10.0.93.202,443,Client_port,3.218.181.105,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44958,72,Detailed,Other,Unknown Traffic Path
3.218.181.134,10.0.93.202,443,Client_port,3.218.181.134,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44826,69,Detailed,Other,Unknown Traffic Path
3.218.180.145,10.0.53.255,443,Client_port,3.218.180.145,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44802,69,Detailed,Other,Unknown Traffic Path
3.218.180.18,10.0.53.255,443,Client_port,3.218.180.18,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44778,69,Detailed,Other,Unknown Traffic Path
3.218.180.187,10.0.53.255,443,Client_port,3.218.180.187,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44778,69,Detailed,Other,Unknown Traffic Path
3.218.180.160,10.0.53.255,443,Client_port,3.218.180.160,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44750,68,Detailed,Other,Unknown Traffic Path
3.218.181.188,10.0.93.202,443,Client_port,3.218.181.188,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,Detailed,Other,Unknown Traffic Path
3.218.181.1,10.0.93.202,443,Client_port,3.218.181.1,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,Detailed,Other,Unknown Traffic Path
3.218.181.174,10.0.93.202,443,Client_port,3.218.181.174,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,Detailed,Other,Unknown Traffic Path
3.218.181.120,10.0.93.202,443,Client_port,3.218.181.120,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44698,67,Detailed,Other,Unknown Traffic Path
3.218.180.132,10.0.53.255,443,Client_port,3.218.180.132,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44698,67,Detailed,Other,Unknown Traffic Path
3.239.232.181,10.0.68.125,443,Client_port,3.239.232.181,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,44679,126,Detailed,Other,Unknown Traffic Path
3.218.180.111,10.0.53.255,443,Client_port,3.218.180.111,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44678,68,Detailed,Other,Unknown Traffic Path
3.218.180.153,10.0.53.255,443,Client_port,3.218.180.153,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44674,67,Detailed,Other,Unknown Traffic Path
3.218.181.113,10.0.93.202,443,Client_port,3.218.181.113,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44674,67,Detailed,Other,Unknown Traffic Path
3.218.181.189,10.0.93.202,443,Client_port,3.218.181.189,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44674,67,Detailed,Other,Unknown Traffic Path
3.218.180.155,10.0.53.255,443,Client_port,3.218.180.155,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44598,66,Detailed,Other,Unknown Traffic Path
3.218.181.130,10.0.93.202,443,Client_port,3.218.181.130,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,Detailed,Other,Unknown Traffic Path
3.218.181.180,10.0.93.202,443,Client_port,3.218.181.180,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,Detailed,Other,Unknown Traffic Path
3.218.180.102,10.0.53.255,443,Client_port,3.218.180.102,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44598,66,Detailed,Other,Unknown Traffic Path
3.218.181.125,10.0.93.202,443,Client_port,3.218.181.125,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.89,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44563,126,Detailed,Other,Unknown Traffic Path
3.239.232.89,10.0.56.117,443,Client_port,3.239.232.89,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,44563,126,Detailed,Other,Unknown Traffic Path
3.218.181.124,10.0.93.202,443,Client_port,3.218.181.124,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44550,66,Detailed,Other,Unknown Traffic Path
3.218.180.190,10.0.53.255,443,Client_port,3.218.180.190,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44546,65,Detailed,Other,Unknown Traffic Path
3.218.181.190,10.0.93.202,443,Client_port,3.218.181.190,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44470,64,Detailed,Other,Unknown Traffic Path
3.218.180.134,10.0.53.255,443,Client_port,3.218.180.134,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44470,64,Detailed,Other,Unknown Traffic Path
3.239.232.19,10.0.68.125,443,Client_port,3.239.232.19,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,44453,125,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,443,Client_port,3.239.232.19,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44453,125,Detailed,Other,Unknown Traffic Path
10.0.67.138,3.218.182.185,Client_port,443,10.0.67.138,3.218.182.185,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,44427,64,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,34.200.67.142,Client_port,443,10.0.52.161,34.200.67.142,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,44344,407,Detailed,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,Client_port,443,10.0.52.161,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,44344,407,Detailed,Other,Unknown Traffic Path
52.94.1.202,10.0.53.255,443,Client_port,52.94.1.202,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44194,75,Detailed,Other,Unknown Traffic Path
52.46.159.244,10.0.92.77,443,Client_port,52.46.159.244,10.0.92.77,subnet-0f90780670d905556,ingress,AMAZON,VPC,,44114,125,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,443,Client_port,52.46.159.244,10.0.92.77,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44114,125,Detailed,Other,Unknown Traffic Path
52.94.2.96,10.0.93.202,443,Client_port,52.94.2.96,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44010,71,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,443,Client_port,3.239.232.82,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,43894,122,Detailed,Other,Unknown Traffic Path
3.239.232.82,10.0.56.117,443,Client_port,3.239.232.82,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,43894,122,Detailed,Other,Unknown Traffic Path
3.236.169.126,10.0.94.238,443,Client_port,3.236.169.126,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,43790,120,Detailed,Other,Unknown Traffic Path
10.0.82.141,52.119.228.252,Client_port,443,10.0.82.141,52.119.228.252,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,43583,57,Detailed,VPC Gateway Endpoint,Through VPC Gateway Endpoint
67.220.251.8,10.0.6.205,443,Client_port,67.220.251.8,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,43469,122,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.58.37,443,Client_port,10.0.92.215,10.0.58.37,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,43164,112,Detailed,Other,Unknown Traffic Path
10.0.92.215,10.0.58.37,443,Client_port,10.0.92.215,10.0.58.37,subnet-0f90780670d905556,egress,VPC,VPC,1,43164,112,Detailed,Other,Unknown Traffic Path
10.0.6.205,52.46.141.158,Client_port,443,10.0.6.205,52.46.141.158,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,43106,151,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.59.76,10.0.58.37,443,Client_port,10.0.59.76,10.0.58.37,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,42340,106,Detailed,Other,Unknown Traffic Path
10.0.59.76,10.0.58.37,443,Client_port,10.0.59.76,10.0.58.37,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,42340,106,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,443,Client_port,44.218.109.122,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42282,55,Detailed,Other,Unknown Traffic Path
44.218.109.122,10.0.58.37,443,Client_port,44.218.109.122,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42282,55,Detailed,Other,Unknown Traffic Path
10.0.6.205,67.220.244.191,Client_port,443,10.0.6.205,67.220.244.191,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,42279,136,Detailed,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.58.37,443,Client_port,3.85.58.70,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42208,54,Detailed,Other,Unknown Traffic Path
3.85.58.70,10.0.58.37,443,Client_port,3.85.58.70,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42208,54,Detailed,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,443,Client_port,35.171.174.60,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42208,54,Detailed,Other,Unknown Traffic Path
35.171.174.60,10.0.58.37,443,Client_port,35.171.174.60,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42208,54,Detailed,Other,Unknown Traffic Path
10.0.6.205,18.160.46.104,All,All,10.0.6.205,18.160.46.104,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,16029220,24446,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.3,All,All,10.0.6.205,18.160.46.3,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,13861349,21906,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.63,All,All,10.0.6.205,18.160.46.63,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,11512602,19349,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,18.160.46.8,All,All,10.0.6.205,18.160.46.8,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,10985431,18822,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.104,10.0.6.205,All,All,18.160.46.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,9410263,18393,IP Level,Other,Unknown Traffic Path
18.160.46.3,10.0.6.205,All,All,18.160.46.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,8505949,16692,IP Level,Other,Unknown Traffic Path
10.0.56.2,18.160.46.104,All,All,10.0.56.2,18.160.46.104,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,7496488,10735,IP Level,Other,Unknown Traffic Path
18.160.46.63,10.0.6.205,All,All,18.160.46.63,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,7484714,14995,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,7453091,10637,IP Level,Other,Unknown Traffic Path
18.160.46.8,10.0.6.205,All,All,18.160.46.8,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,7178036,14506,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.11,All,All,10.0.6.205,3.239.232.11,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,7017268,8244,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.162.125.107,All,All,10.0.6.205,3.162.125.107,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,6985061,12762,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.56.2,18.160.46.3,All,All,10.0.56.2,18.160.46.3,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,6244585,9358,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,6216578,9274,IP Level,Other,Unknown Traffic Path
10.0.82.35,18.160.46.104,All,All,10.0.82.35,18.160.46.104,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,6202760,9477,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,6167163,9368,IP Level,Other,Unknown Traffic Path
34.224.99.134,10.0.6.205,All,All,34.224.99.134,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
52.90.245.104,10.0.6.205,All,All,52.90.245.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
54.173.4.226,10.0.6.205,All,All,54.173.4.226,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
44.201.133.38,10.0.6.205,All,All,44.201.133.38,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
44.201.203.59,10.0.6.205,All,All,44.201.203.59,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
3.227.244.89,10.0.6.205,All,All,3.227.244.89,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
34.229.85.67,10.0.6.205,All,All,34.229.85.67,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
3.237.106.229,10.0.6.205,All,All,3.237.106.229,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767868,131082,IP Level,Other,Unknown Traffic Path
54.164.143.165,10.0.6.205,All,All,54.164.143.165,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767824,131081,IP Level,Other,Unknown Traffic Path
3.89.238.174,10.0.6.205,All,All,3.89.238.174,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767824,131081,IP Level,Other,Unknown Traffic Path
54.159.193.133,10.0.6.205,All,All,54.159.193.133,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767824,131081,IP Level,Other,Unknown Traffic Path
54.91.79.36,10.0.6.205,All,All,54.91.79.36,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5767430,131075,IP Level,Other,Unknown Traffic Path
44.211.94.35,10.0.6.205,All,All,44.211.94.35,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5736408,130367,IP Level,Other,Unknown Traffic Path
35.172.236.199,10.0.6.205,All,All,35.172.236.199,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5712518,129827,IP Level,Other,Unknown Traffic Path
34.201.243.21,10.0.6.205,All,All,34.201.243.21,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5667064,128791,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.216,All,All,10.0.6.205,3.239.232.216,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5608032,6537,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.107,All,All,10.0.6.205,3.239.232.107,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5553572,6569,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.181.186,10.0.82.141,All,All,3.218.181.186,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,5552363,4346,IP Level,Other,Unknown Traffic Path
184.72.117.12,10.0.6.205,All,All,184.72.117.12,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5469856,124309,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.180,All,All,10.0.6.205,3.239.232.180,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5452885,6389,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.162.125.110,All,All,10.0.6.205,3.162.125.110,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,5452119,10719,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.7,All,All,10.0.6.205,3.239.232.7,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5416025,6325,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.86.190.255,10.0.6.205,All,All,3.86.190.255,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5281008,120017,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.34,All,All,10.0.6.205,3.239.232.34,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,5262980,6298,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
44.223.79.3,10.0.6.205,All,All,44.223.79.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5212368,118457,IP Level,Other,Unknown Traffic Path
3.232.95.114,10.0.6.205,All,All,3.232.95.114,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,5121640,116395,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.162.125.85,All,All,10.0.6.205,3.162.125.85,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,5050495,10094,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.82,All,All,10.0.6.205,3.239.232.82,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4947628,5770,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
54.91.158.228,10.0.6.205,All,All,54.91.158.228,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,4865076,110564,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.19,All,All,10.0.6.205,3.239.232.19,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4844354,5781,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,3.239.232.89,All,All,10.0.6.205,3.239.232.89,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4831694,5628,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.162.125.107,10.0.6.205,All,All,3.162.125.107,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,4828048,9972,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.162.125.109,All,All,10.0.6.205,3.162.125.109,subnet-06c17d9828f92e7fc,egress,VPC,CLOUDFRONT,8,4800505,9873,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,3.218.181.186,All,All,10.0.82.141,3.218.181.186,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,4697030,3964,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.35,18.160.46.8,All,All,10.0.82.35,18.160.46.8,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4686972,7469,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.114,All,All,10.0.6.205,3.239.232.114,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,4484560,5190,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.35,10.0.6.205,All,All,10.0.82.35,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4466039,7163,IP Level,Other,Unknown Traffic Path
52.119.233.48,10.0.67.138,All,All,52.119.233.48,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,4465263,3474,IP Level,Other,Unknown Traffic Path
10.0.56.2,18.160.46.8,All,All,10.0.56.2,18.160.46.8,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,4348433,7285,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4320528,7212,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.107,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,4239667,4815,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.107,All,All,10.0.67.138,3.239.232.107,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,4239667,4815,IP Level,Other,Unknown Traffic Path
10.0.82.35,18.160.46.63,All,All,10.0.82.35,18.160.46.63,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4203648,7003,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4148140,6897,IP Level,Other,Unknown Traffic Path
10.0.56.2,18.160.46.63,All,All,10.0.56.2,18.160.46.63,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,4115696,7098,IP Level,Other,Unknown Traffic Path
18.160.46.104,10.0.56.2,All,All,18.160.46.104,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,4113997,7949,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,18.160.46.104,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,4087285,7869,IP Level,Other,Unknown Traffic Path
3.162.125.110,10.0.6.205,All,All,3.162.125.110,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,4078957,8427,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,4054318,6955,IP Level,Other,Unknown Traffic Path
10.0.82.35,18.160.46.3,All,All,10.0.82.35,18.160.46.3,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,4002526,6715,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3982514,6659,IP Level,Other,Unknown Traffic Path
3.162.125.85,10.0.6.205,All,All,3.162.125.85,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,3949560,8210,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.233.48,All,All,10.0.67.138,52.119.233.48,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,3783083,3300,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,3.239.232.11,All,All,10.0.67.138,3.239.232.11,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,3707246,4214,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,3707246,4214,IP Level,Other,Unknown Traffic Path
10.0.69.60,18.160.46.3,All,All,10.0.69.60,18.160.46.3,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,3706615,6110,IP Level,Other,Unknown Traffic Path
3.162.125.109,10.0.6.205,All,All,3.162.125.109,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,CLOUDFRONT,VPC,,3698576,7888,IP Level,Other,Unknown Traffic Path
18.160.46.3,10.0.56.2,All,All,18.160.46.3,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,3677828,7094,IP Level,Other,Unknown Traffic Path
18.160.46.104,10.0.82.35,All,All,18.160.46.104,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,3663563,7156,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,18.160.46.3,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3662257,5973,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,18.160.46.3,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,3633813,7000,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,18.160.46.104,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,3613703,7061,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.7,All,All,10.0.67.138,3.239.232.7,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,3569764,4064,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,3376827,3847,IP Level,Other,Unknown Traffic Path
10.0.69.60,18.160.46.63,All,All,10.0.69.60,18.160.46.63,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,3337569,5590,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,18.160.46.63,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,3310248,5499,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.9,All,All,10.0.6.205,3.239.232.9,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,3265184,3886,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.232.162,10.0.82.141,All,All,52.119.232.162,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,2998186,2380,IP Level,Other,Unknown Traffic Path
10.0.56.2,3.162.125.107,All,All,10.0.56.2,3.162.125.107,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,2956485,5361,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2952960,5347,IP Level,Other,Unknown Traffic Path
18.160.46.8,10.0.82.35,All,All,18.160.46.8,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2862442,5617,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,18.160.46.8,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2821357,5507,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.78,All,All,10.0.6.205,3.239.232.78,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2803535,3380,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.63,10.0.82.35,All,All,18.160.46.63,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2774717,5443,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.89,All,All,10.0.82.141,3.239.232.89,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2741467,3109,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2741467,3109,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,18.160.46.63,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2735405,5363,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2698762,3056,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.180,All,All,10.0.82.141,3.239.232.180,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2698762,3056,IP Level,Other,Unknown Traffic Path
18.160.46.8,10.0.56.2,All,All,18.160.46.8,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2689829,5583,IP Level,Other,Unknown Traffic Path
18.160.46.63,10.0.56.2,All,All,18.160.46.63,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2659750,5425,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,18.160.46.8,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2647001,5489,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,18.160.46.63,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2607572,5314,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.236.169.126,All,All,10.0.6.205,3.236.169.126,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2605101,3180,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
18.160.46.3,10.0.82.35,All,All,18.160.46.3,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,2592970,5130,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,18.160.46.3,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2582304,5085,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.119.232.162,All,All,10.0.82.141,52.119.232.162,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,2575656,2264,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2468054,2825,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.19,All,All,10.0.67.138,3.239.232.19,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2468054,2825,IP Level,Other,Unknown Traffic Path
10.0.69.60,18.160.46.104,All,All,10.0.69.60,18.160.46.104,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2439273,4520,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.216,All,All,10.0.67.138,3.239.232.216,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2422402,2773,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2422402,2773,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,18.160.46.104,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2408914,4440,IP Level,Other,Unknown Traffic Path
10.0.69.60,3.162.125.107,All,All,10.0.69.60,3.162.125.107,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2387096,4132,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2365912,4082,IP Level,Other,Unknown Traffic Path
18.160.46.3,10.0.69.60,All,All,18.160.46.3,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,2325579,4684,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2322423,2648,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.216,All,All,10.0.52.161,3.239.232.216,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,2322423,2648,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.82,All,All,10.0.82.141,3.239.232.82,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2295922,2617,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2295922,2617,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,18.160.46.3,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2289728,4605,IP Level,Other,Unknown Traffic Path
10.0.69.60,18.160.46.8,All,All,10.0.69.60,18.160.46.8,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,2233357,4529,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,18.160.46.8,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2198864,4447,IP Level,Other,Unknown Traffic Path
18.160.46.63,10.0.69.60,All,All,18.160.46.63,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,2159446,4359,IP Level,Other,Unknown Traffic Path
10.0.56.2,3.162.125.85,All,All,10.0.56.2,3.162.125.85,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,2154587,4270,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,18.160.46.63,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2141893,4321,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,2120715,4184,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.240,All,All,10.0.6.205,3.239.232.240,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,2097013,2557,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.9,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,2078000,2380,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.9,All,All,10.0.67.138,3.239.232.9,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,2078000,2380,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.34,All,All,10.0.82.141,3.239.232.34,subnet-0f90780670d905556,egress,VPC,AMAZON,1,2058797,2375,IP Level,Other,Unknown Traffic Path
52.119.234.178,10.0.52.161,All,All,52.119.234.178,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,2032174,1559,IP Level,Other,Unknown Traffic Path
3.162.125.107,10.0.56.2,All,All,3.162.125.107,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,2017085,4200,IP Level,Other,Unknown Traffic Path
3.239.232.11,10.0.6.205,All,All,3.239.232.11,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,2010008,8215,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,3.162.125.107,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,2000133,4170,IP Level,Other,Unknown Traffic Path
10.0.56.2,3.162.125.110,All,All,10.0.56.2,3.162.125.110,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,1998564,4272,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1961505,4181,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.34,All,All,10.0.52.161,3.239.232.34,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1946543,2224,IP Level,Other,Unknown Traffic Path
10.0.82.35,3.162.125.110,All,All,10.0.82.35,3.162.125.110,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1879180,3533,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1868179,3493,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.114,All,All,10.0.52.161,3.239.232.114,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1856579,2106,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1856579,2106,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.34,All,All,10.0.67.138,3.239.232.34,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1842914,2139,IP Level,Other,Unknown Traffic Path
10.0.82.35,3.162.125.85,All,All,10.0.82.35,3.162.125.85,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1829610,3517,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.6.205,All,All,3.239.232.34,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1796789,7240,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1787064,2066,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1786815,3412,IP Level,Other,Unknown Traffic Path
10.0.56.2,3.162.125.109,All,All,10.0.56.2,3.162.125.109,subnet-09782dd538ae12c7c,egress,VPC,CLOUDFRONT,1,1771282,3613,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.181,All,All,10.0.6.205,3.239.232.181,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1769130,2179,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,3.239.232.19,All,All,10.0.82.141,3.239.232.19,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1764477,2013,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1764425,2012,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1755463,2009,IP Level,Other,Unknown Traffic Path
18.160.46.8,10.0.69.60,All,All,18.160.46.8,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1745804,3598,IP Level,Other,Unknown Traffic Path
10.0.56.2,10.0.6.205,All,All,10.0.56.2,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1744007,3551,IP Level,Other,Unknown Traffic Path
18.160.46.104,10.0.69.60,All,All,18.160.46.104,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1741502,3542,IP Level,Other,Unknown Traffic Path
3.218.182.16,10.0.66.24,All,All,3.218.182.16,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1709688,1183,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,18.160.46.8,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1709550,3508,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,18.160.46.104,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1709275,3463,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.119.234.178,All,All,10.0.52.161,52.119.234.178,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,1694793,1428,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.35,3.162.125.107,All,All,10.0.82.35,3.162.125.107,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1693101,3389,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1686737,1935,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.82,All,All,10.0.52.161,3.239.232.82,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1686737,1935,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.6.205,All,All,3.239.232.107,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1674177,6791,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,3.162.125.107,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1666241,3334,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.0,All,All,10.0.6.205,3.239.232.0,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1661474,2060,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.181.152,10.0.66.24,All,All,3.218.181.152,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1661057,1150,IP Level,Other,Unknown Traffic Path
10.0.69.60,3.162.125.110,All,All,10.0.69.60,3.162.125.110,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1656706,3132,IP Level,Other,Unknown Traffic Path
44.215.78.151,10.0.6.205,All,All,44.215.78.151,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1646858,4954,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.180,All,All,10.0.67.138,3.239.232.180,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1646482,1875,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1646482,1875,IP Level,Other,Unknown Traffic Path
10.0.69.60,3.162.125.109,All,All,10.0.69.60,3.162.125.109,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1643067,3237,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1643067,3237,IP Level,Other,Unknown Traffic Path
3.162.125.110,10.0.56.2,All,All,3.162.125.110,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1639078,3467,IP Level,Other,Unknown Traffic Path
3.239.232.7,10.0.6.205,All,All,3.239.232.7,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1638219,6694,IP Level,Other,Unknown Traffic Path
3.239.232.216,10.0.6.205,All,All,3.239.232.216,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1631113,6738,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,3.162.125.110,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1622383,3044,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1617718,1929,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.11,All,All,10.0.52.161,3.239.232.11,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1617718,1929,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1617076,1870,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.11,All,All,10.0.82.141,3.239.232.11,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1617076,1870,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,3.162.125.110,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1614240,3395,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1602925,1816,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.114,All,All,10.0.67.138,3.239.232.114,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,1602925,1816,IP Level,Other,Unknown Traffic Path
3.162.125.107,10.0.69.60,All,All,3.162.125.107,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1597386,3221,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,3.162.125.85,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1592868,3377,IP Level,Other,Unknown Traffic Path
3.162.125.85,10.0.56.2,All,All,3.162.125.85,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1592868,3377,IP Level,Other,Unknown Traffic Path
3.239.232.180,10.0.6.205,All,All,3.239.232.180,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1590088,6537,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1587967,1830,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.213,All,All,10.0.6.205,3.239.232.213,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,1586354,1955,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.69.60,All,All,3.162.125.107,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1575908,3176,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.89,All,All,10.0.52.161,3.239.232.89,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1575136,1788,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1575136,1788,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.6.205,All,All,3.239.232.19,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1499221,6016,IP Level,Other,Unknown Traffic Path
10.0.82.35,3.162.125.109,All,All,10.0.82.35,3.162.125.109,subnet-0f90780670d905556,egress,VPC,CLOUDFRONT,1,1495593,3224,IP Level,Other,Unknown Traffic Path
3.218.180.118,10.0.58.37,All,All,3.218.180.118,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1494631,1022,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.236.169.126,All,All,10.0.82.141,3.236.169.126,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1470480,1668,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1470480,1668,IP Level,Other,Unknown Traffic Path
3.213.207.164,10.0.6.205,All,All,3.213.207.164,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1467917,4535,IP Level,Other,Unknown Traffic Path
52.119.234.114,10.0.66.24,All,All,52.119.234.114,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1430288,983,IP Level,Other,Unknown Traffic Path
3.218.181.116,10.0.66.24,All,All,3.218.181.116,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1424203,972,IP Level,Other,Unknown Traffic Path
10.0.82.35,10.0.6.205,All,All,10.0.82.35,3.162.125.109,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1413431,3085,IP Level,Other,Unknown Traffic Path
3.162.125.109,10.0.56.2,All,All,3.162.125.109,10.0.56.2,subnet-09782dd538ae12c7c,ingress,CLOUDFRONT,VPC,,1411802,2901,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.2,All,All,3.162.125.109,10.0.56.2,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1398229,2860,IP Level,Other,Unknown Traffic Path
3.239.232.82,10.0.6.205,All,All,3.239.232.82,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1397678,5753,IP Level,Other,Unknown Traffic Path
3.162.125.85,10.0.82.35,All,All,3.162.125.85,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1388786,2830,IP Level,Other,Unknown Traffic Path
3.239.232.89,10.0.6.205,All,All,3.239.232.89,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1378917,5679,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,3.162.125.85,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1372794,2790,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.7,All,All,10.0.82.141,3.239.232.7,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1372496,1620,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1372496,1620,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.9,All,All,10.0.82.141,3.239.232.9,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1347041,1529,IP Level,Other,Unknown Traffic Path
3.162.125.110,10.0.82.35,All,All,3.162.125.110,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1341491,2777,IP Level,Other,Unknown Traffic Path
3.218.181.124,10.0.92.77,All,All,3.218.181.124,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1319281,918,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1290065,1467,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.240,All,All,10.0.52.161,3.239.232.240,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1290065,1467,IP Level,Other,Unknown Traffic Path
3.162.125.107,10.0.82.35,All,All,3.162.125.107,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1287803,2690,IP Level,Other,Unknown Traffic Path
3.218.180.175,10.0.58.37,All,All,3.218.180.175,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1276385,893,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,3.162.125.110,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1264299,2616,IP Level,Other,Unknown Traffic Path
34.202.28.68,10.0.6.205,All,All,34.202.28.68,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1261079,3877,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,3.162.125.107,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1252007,2626,IP Level,Other,Unknown Traffic Path
3.162.125.110,10.0.69.60,All,All,3.162.125.110,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1242433,2489,IP Level,Other,Unknown Traffic Path
3.239.232.114,10.0.6.205,All,All,3.239.232.114,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1237239,5154,IP Level,Other,Unknown Traffic Path
3.162.125.109,10.0.69.60,All,All,3.162.125.109,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,1202543,2589,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,3.162.125.110,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1200366,2415,IP Level,Other,Unknown Traffic Path
3.162.125.109,10.0.82.35,All,All,3.162.125.109,10.0.82.35,subnet-0f90780670d905556,ingress,CLOUDFRONT,VPC,,1198027,2607,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.107,All,All,10.0.52.161,3.239.232.107,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1193800,1383,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.107,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1193800,1383,IP Level,Other,Unknown Traffic Path
10.0.69.60,3.162.125.85,All,All,10.0.69.60,3.162.125.85,subnet-00934156b7ada087f,egress,VPC,CLOUDFRONT,1,1163048,2540,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.35,All,All,3.162.125.109,10.0.82.35,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1157245,2539,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.107,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,1149543,4860,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.67.138,All,All,3.239.232.107,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,1149543,4859,IP Level,Other,Unknown Traffic Path
13.126.192.187,10.0.6.205,All,All,13.126.192.187,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1146670,1995,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.69.60,All,All,3.162.125.109,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,1143050,2488,IP Level,Other,Unknown Traffic Path
10.0.69.60,10.0.6.205,All,All,10.0.69.60,3.162.125.85,subnet-06c17d9828f92e7fc,ingress,VPC,CLOUDFRONT,,1142913,2497,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.9,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1113008,1273,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.78,All,All,10.0.52.161,3.239.232.78,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1098249,1243,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.213,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1092799,1233,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.213,All,All,10.0.82.141,3.239.232.213,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1092799,1233,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.181,All,All,10.0.82.141,3.239.232.181,subnet-0f90780670d905556,egress,VPC,AMAZON,1,1090147,1257,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.181,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1090147,1257,IP Level,Other,Unknown Traffic Path
3.218.181.183,10.0.92.77,All,All,3.218.181.183,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1083696,743,IP Level,Other,Unknown Traffic Path
3.218.180.187,10.0.66.24,All,All,3.218.180.187,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1061216,726,IP Level,Other,Unknown Traffic Path
34.229.28.141,10.0.6.205,All,All,34.229.28.141,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,1060958,3216,IP Level,Other,Unknown Traffic Path
3.239.232.9,10.0.6.205,All,All,3.239.232.9,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,1056806,4288,IP Level,Other,Unknown Traffic Path
52.119.234.176,10.0.52.161,All,All,52.119.234.176,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,1054526,867,IP Level,Other,Unknown Traffic Path
52.119.234.142,10.0.66.24,All,All,52.119.234.142,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,1051846,717,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1041815,1178,IP Level,Other,Unknown Traffic Path
3.218.181.135,10.0.82.141,All,All,3.218.181.135,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,1012638,838,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.180,All,All,10.0.52.161,3.239.232.180,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,1010679,1151,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,1010679,1151,IP Level,Other,Unknown Traffic Path
3.239.232.11,10.0.67.138,All,All,3.239.232.11,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,1007300,4264,IP Level,Other,Unknown Traffic Path
3.162.125.85,10.0.69.60,All,All,3.162.125.85,10.0.69.60,subnet-00934156b7ada087f,ingress,CLOUDFRONT,VPC,,999691,2070,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.119.234.176,All,All,10.0.52.161,52.119.234.176,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,990024,872,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.69.60,All,All,3.162.125.85,10.0.69.60,subnet-06c17d9828f92e7fc,egress,CLOUDFRONT,VPC,1,983950,2044,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.114,All,All,10.0.82.141,3.239.232.114,subnet-0f90780670d905556,egress,VPC,AMAZON,1,982987,1131,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.114,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,982987,1131,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.78,All,All,10.0.67.138,3.239.232.78,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,982758,1148,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,982758,1148,IP Level,Other,Unknown Traffic Path
3.239.232.7,10.0.67.138,All,All,3.239.232.7,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,976316,4101,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.7,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,976316,4101,IP Level,Other,Unknown Traffic Path
34.237.177.62,10.0.6.205,All,All,34.237.177.62,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,954779,2902,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.0,All,All,10.0.67.138,3.239.232.0,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,943765,1079,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,943765,1079,IP Level,Other,Unknown Traffic Path
3.218.181.102,10.0.92.77,All,All,3.218.181.102,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,938167,646,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.11,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,933305,3949,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.82,All,All,10.0.67.138,3.239.232.82,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,918390,1070,IP Level,Other,Unknown Traffic Path
52.119.229.0,10.0.92.77,All,All,52.119.229.0,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,917048,628,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.82,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,911590,1053,IP Level,Other,Unknown Traffic Path
3.218.181.115,10.0.67.138,All,All,3.218.181.115,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,905874,788,IP Level,Other,Unknown Traffic Path
52.119.233.56,10.0.67.138,All,All,52.119.233.56,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,905117,711,IP Level,Other,Unknown Traffic Path
3.239.232.78,10.0.6.205,All,All,3.239.232.78,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,901423,3591,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.181.115,All,All,10.0.67.138,3.218.181.115,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,878322,793,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,820860,989,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.236.169.126,All,All,10.0.67.138,3.236.169.126,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,820860,989,IP Level,Other,Unknown Traffic Path
52.119.234.230,10.0.67.138,All,All,52.119.234.230,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,812253,626,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.135,All,All,10.0.82.141,3.218.181.135,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,804863,648,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
35.154.158.236,10.0.6.205,All,All,35.154.158.236,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,801151,1403,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.216,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,792801,903,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.216,All,All,10.0.82.141,3.239.232.216,subnet-0f90780670d905556,egress,VPC,AMAZON,1,792801,903,IP Level,Other,Unknown Traffic Path
3.218.180.147,10.0.67.138,All,All,3.218.180.147,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,782449,706,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.181.153,All,All,10.0.67.138,3.218.181.153,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,779114,746,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.236.169.126,10.0.6.205,All,All,3.236.169.126,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,771135,3020,IP Level,Other,Unknown Traffic Path
3.218.180.187,10.0.52.161,All,All,3.218.180.187,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,764844,702,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,44.215.78.151,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,763574,2329,IP Level,Other,Unknown Traffic Path
44.215.78.151,10.0.67.138,All,All,44.215.78.151,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,763574,2329,IP Level,Other,Unknown Traffic Path
3.218.181.153,10.0.67.138,All,All,3.218.181.153,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,759474,723,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.180.147,All,All,10.0.67.138,3.218.180.147,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,747357,703,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.89,10.0.82.141,All,All,3.239.232.89,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,740441,3144,IP Level,Other,Unknown Traffic Path
3.218.182.180,10.0.67.138,All,All,3.218.182.180,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,739087,652,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.187,All,All,10.0.52.161,3.218.180.187,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,727254,658,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,52.119.233.56,All,All,10.0.67.138,52.119.233.56,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,724794,641,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.180,10.0.82.141,All,All,3.239.232.180,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,724462,3084,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.180,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,724462,3084,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.46.143.211,All,All,10.0.6.205,52.46.143.211,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,717201,828,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,10.0.6.205,All,All,10.0.82.141,52.46.143.211,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,712768,816,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.46.143.211,All,All,10.0.82.141,52.46.143.211,subnet-0f90780670d905556,egress,VPC,AMAZON,1,712768,816,IP Level,Other,Unknown Traffic Path
10.0.6.205,67.220.247.33,All,All,10.0.6.205,67.220.247.33,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,710756,844,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.82.141,All,All,3.239.232.89,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,709329,3015,IP Level,Other,Unknown Traffic Path
3.213.207.164,10.0.67.138,All,All,3.213.207.164,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,703262,2203,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,702150,816,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.78,All,All,10.0.82.141,3.239.232.78,subnet-0f90780670d905556,egress,VPC,AMAZON,1,702150,816,IP Level,Other,Unknown Traffic Path
10.0.67.138,67.220.247.33,All,All,10.0.67.138,67.220.247.33,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,698193,802,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,67.220.247.33,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,698193,802,IP Level,Other,Unknown Traffic Path
52.203.162.156,10.0.6.205,All,All,52.203.162.156,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,695274,1972,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.67.138,All,All,3.239.232.19,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,686234,2875,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.19,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,686234,2875,IP Level,Other,Unknown Traffic Path
3.239.232.240,10.0.6.205,All,All,3.239.232.240,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,685198,2685,IP Level,Other,Unknown Traffic Path
3.239.232.216,10.0.67.138,All,All,3.239.232.216,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,666728,2820,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.216,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,666728,2820,IP Level,Other,Unknown Traffic Path
15.206.245.253,10.0.6.205,All,All,15.206.245.253,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,664167,1167,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.234.230,All,All,10.0.67.138,52.119.234.230,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,653399,557,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,3.239.232.70,All,All,10.0.67.138,3.239.232.70,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,650000,752,IP Level,Other,Unknown Traffic Path
34.202.28.68,10.0.52.161,All,All,34.202.28.68,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,649720,1985,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,34.202.28.68,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,649592,1983,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.216,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,639048,2698,IP Level,Other,Unknown Traffic Path
3.239.232.216,10.0.52.161,All,All,3.239.232.216,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,639048,2698,IP Level,Other,Unknown Traffic Path
10.0.6.205,44.215.78.151,All,All,10.0.6.205,44.215.78.151,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,637466,4274,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.67.138,All,All,3.213.207.164,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,636961,2004,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,34.229.28.141,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,634596,1921,IP Level,Other,Unknown Traffic Path
34.229.28.141,10.0.82.141,All,All,34.229.28.141,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,634596,1921,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.82,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,627687,2651,IP Level,Other,Unknown Traffic Path
3.239.232.82,10.0.82.141,All,All,3.239.232.82,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,627687,2652,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.239.232.70,All,All,10.0.6.205,3.239.232.70,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,624053,839,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,3.239.232.7,All,All,10.0.52.161,3.239.232.7,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,623129,729,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.7,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,623129,729,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.181,All,All,10.0.52.161,3.239.232.181,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,601070,682,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.181,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,601070,682,IP Level,Other,Unknown Traffic Path
3.218.182.103,10.0.67.138,All,All,3.218.182.103,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,596228,516,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.180,All,All,10.0.67.138,3.218.182.180,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,592700,495,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
79.110.62.77,10.0.6.205,All,All,79.110.62.77,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,592560,14814,IP Level,Other,Unknown Traffic Path
3.239.232.181,10.0.6.205,All,All,3.239.232.181,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,592370,2299,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.82.141,All,All,3.239.232.34,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,582326,2423,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.9,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,572602,2408,IP Level,Other,Unknown Traffic Path
3.239.232.9,10.0.67.138,All,All,3.239.232.9,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,572602,2408,IP Level,Other,Unknown Traffic Path
3.239.232.0,10.0.6.205,All,All,3.239.232.0,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,561914,2175,IP Level,Other,Unknown Traffic Path
3.218.180.158,10.0.52.161,All,All,3.218.180.158,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,545372,485,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.34,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,545319,2270,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,44.215.78.151,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,543490,1633,IP Level,Other,Unknown Traffic Path
44.215.78.151,10.0.82.141,All,All,44.215.78.151,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,543490,1633,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.52.161,All,All,3.239.232.34,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,536124,2259,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.34,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,536124,2260,IP Level,Other,Unknown Traffic Path
3.239.232.213,10.0.6.205,All,All,3.239.232.213,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,534739,2082,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.34,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,527592,2178,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.67.138,All,All,3.239.232.34,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,527592,2178,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,515832,629,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.240,All,All,10.0.82.141,3.239.232.240,subnet-0f90780670d905556,egress,VPC,AMAZON,1,515832,629,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.103,All,All,10.0.67.138,3.218.182.103,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,512905,458,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,3.218.180.158,All,All,10.0.52.161,3.218.180.158,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,504872,463,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.114,10.0.52.161,All,All,3.239.232.114,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,501462,2128,IP Level,Other,Unknown Traffic Path
10.0.6.205,67.220.246.91,All,All,10.0.6.205,67.220.246.91,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,500091,569,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,67.220.246.91,All,All,10.0.82.141,67.220.246.91,subnet-0f90780670d905556,egress,VPC,AMAZON,1,500091,569,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,67.220.246.91,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,500091,569,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,497901,608,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.19,All,All,10.0.52.161,3.239.232.19,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,497901,608,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.11,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,496059,2005,IP Level,Other,Unknown Traffic Path
3.239.232.11,10.0.52.161,All,All,3.239.232.11,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,496059,2004,IP Level,Other,Unknown Traffic Path
3.213.207.164,10.0.52.161,All,All,3.213.207.164,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,488869,1475,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.19,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,483794,2036,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.82.141,All,All,3.239.232.19,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,483794,2036,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.213.207.164,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,482750,1467,IP Level,Other,Unknown Traffic Path
34.207.48.146,10.0.6.205,All,All,34.207.48.146,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,475308,1547,IP Level,Other,Unknown Traffic Path
18.233.11.67,10.0.6.205,All,All,18.233.11.67,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,472795,1459,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.82,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,469245,1977,IP Level,Other,Unknown Traffic Path
3.239.232.82,10.0.52.161,All,All,3.239.232.82,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,469245,1976,IP Level,Other,Unknown Traffic Path
44.218.2.19,10.0.6.205,All,All,44.218.2.19,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,469144,609,IP Level,Other,Unknown Traffic Path
13.126.192.187,10.0.67.138,All,All,13.126.192.187,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,468932,817,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.234.52,All,All,10.0.67.138,52.119.234.52,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,468091,446,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.52.161,All,All,3.239.232.114,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,466688,1988,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.213.207.164,All,All,10.0.6.205,3.213.207.164,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,464377,3677,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.11,10.0.82.141,All,All,3.239.232.11,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,461281,1924,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.11,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,461281,1924,IP Level,Other,Unknown Traffic Path
3.218.182.16,10.0.67.138,All,All,3.218.182.16,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,457280,422,IP Level,Other,Unknown Traffic Path
54.144.248.163,10.0.6.205,All,All,54.144.248.163,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,449651,576,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.180,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,449634,1888,IP Level,Other,Unknown Traffic Path
3.239.232.180,10.0.67.138,All,All,3.239.232.180,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,449634,1888,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.89,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,444339,512,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.89,All,All,10.0.67.138,3.239.232.89,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,444339,512,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,13.126.192.187,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,442572,771,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.114,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,432280,1840,IP Level,Other,Unknown Traffic Path
3.239.232.114,10.0.67.138,All,All,3.239.232.114,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,432280,1839,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.89,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,426077,1811,IP Level,Other,Unknown Traffic Path
3.239.232.89,10.0.52.161,All,All,3.239.232.89,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,426077,1810,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.213,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,425176,520,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.213,All,All,10.0.52.161,3.239.232.213,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,425176,520,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.135,All,All,10.0.52.161,3.218.180.135,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,420441,388,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.82.141,All,All,3.239.232.7,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,412918,1673,IP Level,Other,Unknown Traffic Path
3.239.232.7,10.0.82.141,All,All,3.239.232.7,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,412918,1673,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,34.237.177.62,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,412558,1284,IP Level,Other,Unknown Traffic Path
34.237.177.62,10.0.82.141,All,All,34.237.177.62,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,412558,1284,IP Level,Other,Unknown Traffic Path
52.119.234.52,10.0.67.138,All,All,52.119.234.52,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,403695,407,IP Level,Other,Unknown Traffic Path
3.236.169.126,10.0.82.141,All,All,3.236.169.126,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,400232,1700,IP Level,Other,Unknown Traffic Path
10.0.6.205,34.202.28.68,All,All,10.0.6.205,34.202.28.68,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,400216,3250,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
35.171.174.60,10.0.6.205,All,All,35.171.174.60,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,394537,502,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.70,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,393801,466,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.119.234.246,All,All,10.0.52.161,52.119.234.246,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,387718,371,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.180.135,10.0.52.161,All,All,3.218.180.135,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,380668,419,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.16,All,All,10.0.67.138,3.218.182.16,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,378515,377,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.182.145,10.0.67.138,All,All,3.218.182.145,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,370274,345,IP Level,Other,Unknown Traffic Path
3.85.58.70,10.0.6.205,All,All,3.85.58.70,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,366906,464,IP Level,Other,Unknown Traffic Path
3.239.232.9,10.0.82.141,All,All,3.239.232.9,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,366683,1552,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.9,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,366683,1553,IP Level,Other,Unknown Traffic Path
13.126.192.187,10.0.82.141,All,All,13.126.192.187,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,364514,638,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,13.126.192.187,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,364514,638,IP Level,Other,Unknown Traffic Path
34.229.28.141,10.0.67.138,All,All,34.229.28.141,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,363084,1105,IP Level,Other,Unknown Traffic Path
52.119.234.246,10.0.52.161,All,All,52.119.234.246,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,360712,337,IP Level,Other,Unknown Traffic Path
10.0.6.205,34.229.28.141,All,All,10.0.6.205,34.229.28.141,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,357654,2500,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
34.237.177.62,10.0.52.161,All,All,34.237.177.62,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,356686,1080,IP Level,Other,Unknown Traffic Path
10.0.6.205,13.126.192.187,All,All,10.0.6.205,13.126.192.187,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,356405,1369,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.213.207.164,10.0.82.141,All,All,3.213.207.164,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,354429,1074,IP Level,Other,Unknown Traffic Path
44.215.78.151,10.0.52.161,All,All,44.215.78.151,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,353777,1017,IP Level,Other,Unknown Traffic Path
34.200.67.142,10.0.6.205,All,All,34.200.67.142,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,351043,1004,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,34.202.28.68,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,350566,1084,IP Level,Other,Unknown Traffic Path
34.202.28.68,10.0.67.138,All,All,34.202.28.68,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,350566,1084,IP Level,Other,Unknown Traffic Path
3.239.232.240,10.0.52.161,All,All,3.239.232.240,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,349929,1478,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.240,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,349929,1478,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,34.237.177.62,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,349770,1068,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.213.207.164,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,348206,1064,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,345305,408,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.239.232.0,All,All,10.0.52.161,3.239.232.0,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,345305,408,IP Level,Other,Unknown Traffic Path
10.0.6.205,34.237.177.62,All,All,10.0.6.205,34.237.177.62,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,341722,2536,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
122.226.191.252,10.0.6.205,All,All,122.226.191.252,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,341560,8539,IP Level,Other,Unknown Traffic Path
3.218.182.117,10.0.67.138,All,All,3.218.182.117,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,339864,304,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,44.215.78.151,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,339794,992,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.52.161,All,All,3.239.232.107,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,339604,1409,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.107,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,339604,1409,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,35.154.158.236,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,339534,588,IP Level,Other,Unknown Traffic Path
35.154.158.236,10.0.67.138,All,All,35.154.158.236,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,339534,588,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.145,All,All,10.0.67.138,3.218.182.145,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,339516,313,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,3.218.181.173,All,All,10.0.82.141,3.218.181.173,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,337849,318,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.67.138,All,All,34.229.28.141,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,334908,1019,IP Level,Other,Unknown Traffic Path
3.94.239.84,10.0.6.205,All,All,3.94.239.84,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,331233,422,IP Level,Other,Unknown Traffic Path
3.218.182.104,10.0.67.138,All,All,3.218.182.104,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,327368,318,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.236.169.126,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,326133,1382,IP Level,Other,Unknown Traffic Path
3.218.180.103,10.0.52.161,All,All,3.218.180.103,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,322305,292,IP Level,Other,Unknown Traffic Path
3.239.232.70,10.0.6.205,All,All,3.239.232.70,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,316405,1192,IP Level,Other,Unknown Traffic Path
34.207.48.146,10.0.67.138,All,All,34.207.48.146,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,312750,1032,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,34.207.48.146,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,312750,1032,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.181,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,309812,1275,IP Level,Other,Unknown Traffic Path
3.239.232.181,10.0.82.141,All,All,3.239.232.181,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,309812,1275,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.0,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,308287,381,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.0,All,All,10.0.82.141,3.239.232.0,subnet-0f90780670d905556,egress,VPC,AMAZON,1,308287,381,IP Level,Other,Unknown Traffic Path
3.218.180.153,10.0.52.161,All,All,3.218.180.153,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,305742,284,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.156,All,All,10.0.82.141,3.218.181.156,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,305375,283,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,3.218.182.104,All,All,10.0.67.138,3.218.182.104,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,303627,284,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,52.203.162.156,All,All,10.0.6.205,52.203.162.156,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,302734,1816,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,52.119.228.102,All,All,10.0.67.138,52.119.228.102,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,300860,311,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
13.126.192.187,10.0.52.161,All,All,13.126.192.187,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,300376,545,IP Level,Other,Unknown Traffic Path
10.0.67.138,44.215.78.151,All,All,10.0.67.138,44.215.78.151,subnet-00934156b7ada087f,egress,VPC,EC2,1,295588,1980,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,295588,1980,IP Level,Other,Unknown Traffic Path
3.239.232.78,10.0.52.161,All,All,3.239.232.78,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,294386,1250,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.78,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,294386,1250,IP Level,Other,Unknown Traffic Path
35.154.158.236,10.0.82.141,All,All,35.154.158.236,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,293243,495,IP Level,Other,Unknown Traffic Path
3.239.232.213,10.0.82.141,All,All,3.239.232.213,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,291790,1239,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.213,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,291790,1239,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.117,All,All,10.0.67.138,3.218.182.117,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,290955,259,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.156,10.0.82.141,All,All,3.218.181.156,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,290506,305,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,52.203.162.156,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,287319,817,IP Level,Other,Unknown Traffic Path
52.203.162.156,10.0.82.141,All,All,52.203.162.156,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,287319,817,IP Level,Other,Unknown Traffic Path
52.119.228.102,10.0.67.138,All,All,52.119.228.102,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,287127,285,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,13.126.192.187,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,286679,522,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.78,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,285984,1166,IP Level,Other,Unknown Traffic Path
3.239.232.78,10.0.67.138,All,All,3.239.232.78,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,285984,1166,IP Level,Other,Unknown Traffic Path
52.86.65.104,10.0.6.205,All,All,52.86.65.104,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,285862,856,IP Level,Other,Unknown Traffic Path
15.206.245.253,10.0.67.138,All,All,15.206.245.253,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,285613,509,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,15.206.245.253,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,285613,509,IP Level,Other,Unknown Traffic Path
52.119.234.14,10.0.52.161,All,All,52.119.234.14,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,282805,242,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.119.234.14,All,All,10.0.52.161,52.119.234.14,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,281213,252,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
34.202.28.68,10.0.82.141,All,All,34.202.28.68,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,279991,863,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,35.154.158.236,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,276378,469,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.180,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,274141,1160,IP Level,Other,Unknown Traffic Path
3.239.232.180,10.0.52.161,All,All,3.239.232.180,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,274141,1160,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.114,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,272546,1143,IP Level,Other,Unknown Traffic Path
3.239.232.114,10.0.82.141,All,All,3.239.232.114,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,272546,1143,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.103,All,All,10.0.52.161,3.218.180.103,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,270478,241,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.239.232.82,10.0.67.138,All,All,3.239.232.82,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,267265,1096,IP Level,Other,Unknown Traffic Path
3.218.181.173,10.0.82.141,All,All,3.218.181.173,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,266624,284,IP Level,Other,Unknown Traffic Path
52.119.234.26,10.0.67.138,All,All,52.119.234.26,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,264968,245,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.153,All,All,10.0.52.161,3.218.180.153,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,262630,227,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.82.141,All,All,34.202.28.68,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,260921,810,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.0,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,260480,1096,IP Level,Other,Unknown Traffic Path
3.239.232.0,10.0.67.138,All,All,3.239.232.0,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,260480,1096,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.236.169.126,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,259288,1033,IP Level,Other,Unknown Traffic Path
3.236.169.126,10.0.67.138,All,All,3.236.169.126,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,259288,1033,IP Level,Other,Unknown Traffic Path
3.219.63.228,10.0.6.205,All,All,3.219.63.228,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,253231,724,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.234.26,All,All,10.0.67.138,52.119.234.26,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,251096,233,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.236.169.126,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,245934,314,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.236.169.126,All,All,10.0.52.161,3.236.169.126,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,245934,314,IP Level,Other,Unknown Traffic Path
10.0.6.205,35.154.158.236,All,All,10.0.6.205,35.154.158.236,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,244383,949,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.228.222,10.0.67.138,All,All,52.119.228.222,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,233104,194,IP Level,Other,Unknown Traffic Path
52.203.162.156,10.0.67.138,All,All,52.203.162.156,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,232606,660,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,52.203.162.156,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,232478,658,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.239.232.240,All,All,10.0.67.138,3.239.232.240,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,231222,275,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.239.232.240,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,231222,275,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.151,All,All,10.0.82.141,3.218.181.151,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,231100,238,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
18.233.11.67,10.0.52.161,All,All,18.233.11.67,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,229875,696,IP Level,Other,Unknown Traffic Path
52.200.147.156,10.0.6.205,All,All,52.200.147.156,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,225587,285,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,18.233.11.67,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,223704,687,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.132,All,All,10.0.82.141,3.218.181.132,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,223264,217,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,52.119.232.242,All,All,10.0.82.141,52.119.232.242,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,220465,203,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,34.229.28.141,All,All,10.0.82.141,34.229.28.141,subnet-0f90780670d905556,egress,VPC,EC2,1,219959,1426,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.82,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,218835,893,IP Level,Other,Unknown Traffic Path
10.0.6.205,15.206.245.253,All,All,10.0.6.205,15.206.245.253,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,216741,815,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.216,10.0.82.141,All,All,3.239.232.216,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,215043,912,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.216,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,215043,912,IP Level,Other,Unknown Traffic Path
15.206.245.253,10.0.82.141,All,All,15.206.245.253,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,213144,374,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,3.85.58.70,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,212651,264,IP Level,Other,Unknown Traffic Path
3.85.58.70,10.0.92.77,All,All,3.85.58.70,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,212651,264,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,44.218.2.19,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,211062,270,IP Level,Other,Unknown Traffic Path
44.218.2.19,10.0.66.24,All,All,44.218.2.19,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,211062,270,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.213.207.164,All,All,10.0.67.138,3.213.207.164,subnet-00934156b7ada087f,egress,VPC,EC2,1,210082,1733,IP Level,Other,Unknown Traffic Path
10.0.52.161,34.202.28.68,All,All,10.0.52.161,34.202.28.68,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,208918,1801,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,208814,1798,IP Level,Other,Unknown Traffic Path
52.86.65.104,10.0.67.138,All,All,52.86.65.104,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,207831,624,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,52.86.65.104,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,207831,624,IP Level,Other,Unknown Traffic Path
15.206.245.253,10.0.52.161,All,All,15.206.245.253,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,207456,355,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.228.222,All,All,10.0.67.138,52.119.228.222,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,204743,183,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
44.218.109.122,10.0.6.205,All,All,44.218.109.122,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,204557,259,IP Level,Other,Unknown Traffic Path
67.220.247.33,10.0.6.205,All,All,67.220.247.33,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,203037,883,IP Level,Other,Unknown Traffic Path
3.218.181.180,10.0.92.77,All,All,3.218.181.180,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,202421,146,IP Level,Other,Unknown Traffic Path
52.119.234.0,10.0.52.161,All,All,52.119.234.0,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,202040,174,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.78,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,201916,838,IP Level,Other,Unknown Traffic Path
3.239.232.78,10.0.82.141,All,All,3.239.232.78,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,201916,838,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,34.229.28.141,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,199931,1293,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,199329,1337,IP Level,Other,Unknown Traffic Path
10.0.82.141,44.215.78.151,All,All,10.0.82.141,44.215.78.151,subnet-0f90780670d905556,egress,VPC,EC2,1,199329,1339,IP Level,Other,Unknown Traffic Path
89.248.163.201,10.0.6.205,All,All,89.248.163.201,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,198220,4505,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.119.234.80,All,All,10.0.52.161,52.119.234.80,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,197839,206,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.52.161,All,All,15.206.245.253,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,194073,331,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,34.237.177.62,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,192451,550,IP Level,Other,Unknown Traffic Path
34.237.177.62,10.0.67.138,All,All,34.237.177.62,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,192451,550,IP Level,Other,Unknown Traffic Path
52.46.143.211,10.0.6.205,All,All,52.46.143.211,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,190868,854,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.180.177,All,All,10.0.67.138,3.218.180.177,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,190803,189,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.92.77,All,All,54.144.248.163,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,189854,241,IP Level,Other,Unknown Traffic Path
54.144.248.163,10.0.92.77,All,All,54.144.248.163,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,189854,241,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.181.12,All,All,10.0.67.138,3.218.181.12,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,189470,180,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,189125,1608,IP Level,Other,Unknown Traffic Path
44.218.2.19,10.0.92.77,All,All,44.218.2.19,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,188191,246,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,35.154.158.236,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,185239,346,IP Level,Other,Unknown Traffic Path
35.154.158.236,10.0.52.161,All,All,35.154.158.236,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,185239,346,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,15.206.245.253,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,184481,327,IP Level,Other,Unknown Traffic Path
3.218.181.132,10.0.82.141,All,All,3.218.181.132,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,183904,204,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,52.46.143.211,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,183705,831,IP Level,Other,Unknown Traffic Path
52.46.143.211,10.0.82.141,All,All,52.46.143.211,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,183705,831,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.70,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,182875,755,IP Level,Other,Unknown Traffic Path
3.239.232.70,10.0.67.138,All,All,3.239.232.70,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,182875,755,IP Level,Other,Unknown Traffic Path
3.239.232.7,10.0.52.161,All,All,3.239.232.7,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,182579,735,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.7,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,182579,735,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,44.218.2.19,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,181738,236,IP Level,Other,Unknown Traffic Path
67.220.247.33,10.0.67.138,All,All,67.220.247.33,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,181708,818,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,67.220.247.33,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,181708,818,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.181.184,All,All,10.0.67.138,3.218.181.184,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,180121,168,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.12,10.0.67.138,All,All,3.218.181.12,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,178898,192,IP Level,Other,Unknown Traffic Path
3.218.180.177,10.0.67.138,All,All,3.218.180.177,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,178854,188,IP Level,Other,Unknown Traffic Path
35.171.174.60,10.0.66.24,All,All,35.171.174.60,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,177022,222,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,35.171.174.60,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,177022,222,IP Level,Other,Unknown Traffic Path
52.119.232.242,10.0.82.141,All,All,52.119.232.242,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,176210,175,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.121,All,All,10.0.52.161,3.218.180.121,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,175653,181,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.203.162.156,10.0.52.161,All,All,52.203.162.156,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,175477,497,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,52.203.162.156,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,175477,497,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,35.171.174.60,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,175307,226,IP Level,Other,Unknown Traffic Path
35.171.174.60,10.0.92.77,All,All,35.171.174.60,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,175307,226,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.119.232.78,All,All,10.0.82.141,52.119.232.78,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,174105,178,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,52.119.234.0,All,All,10.0.52.161,52.119.234.0,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,169920,158,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.181.184,10.0.67.138,All,All,3.218.181.184,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,168221,181,IP Level,Other,Unknown Traffic Path
3.239.232.240,10.0.82.141,All,All,3.239.232.240,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,167941,653,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.240,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,167941,653,IP Level,Other,Unknown Traffic Path
10.0.6.205,18.233.11.67,All,All,10.0.6.205,18.233.11.67,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,167047,1228,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.52.161,All,All,3.239.232.19,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,164722,641,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.52.161,All,All,3.239.232.19,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,164722,641,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.181,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,164252,693,IP Level,Other,Unknown Traffic Path
3.239.232.181,10.0.52.161,All,All,3.239.232.181,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,164252,693,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.219.63.228,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,164028,478,IP Level,Other,Unknown Traffic Path
3.219.63.228,10.0.67.138,All,All,3.219.63.228,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,164028,478,IP Level,Other,Unknown Traffic Path
3.218.181.151,10.0.82.141,All,All,3.218.181.151,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,163131,214,IP Level,Other,Unknown Traffic Path
34.207.48.146,10.0.82.141,All,All,34.207.48.146,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,162558,515,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,34.207.48.146,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,162558,515,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.213.207.164,All,All,10.0.52.161,3.213.207.164,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,160745,1231,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.239.232.70,All,All,10.0.82.141,3.239.232.70,subnet-0f90780670d905556,egress,VPC,AMAZON,1,159773,190,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.239.232.70,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,159773,190,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.67.138,All,All,10.0.59.76,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,159631,433,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.67.138,All,All,10.0.59.76,10.0.67.138,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,159631,433,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.131,All,All,10.0.52.161,3.218.180.131,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,159037,158,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.119.234.80,10.0.52.161,All,All,52.119.234.80,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,158394,184,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.119.224.100,All,All,10.0.67.138,52.119.224.100,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,157662,158,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
211.105.137.210,10.0.6.205,All,All,211.105.137.210,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,156840,3921,IP Level,Other,Unknown Traffic Path
18.233.11.67,10.0.67.138,All,All,18.233.11.67,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,156364,470,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,18.233.11.67,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,156364,470,IP Level,Other,Unknown Traffic Path
10.0.66.24,52.119.226.80,All,All,10.0.66.24,52.119.226.80,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,155067,208,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
54.144.248.163,10.0.66.24,All,All,54.144.248.163,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,154329,201,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,54.144.248.163,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,154329,201,IP Level,Other,Unknown Traffic Path
10.0.82.141,34.237.177.62,All,All,10.0.82.141,34.237.177.62,subnet-0f90780670d905556,egress,VPC,EC2,1,153599,1151,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,152812,1218,IP Level,Other,Unknown Traffic Path
10.0.58.37,3.218.180.109,All,All,10.0.58.37,3.218.180.109,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,152679,202,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,34.200.67.142,All,All,10.0.6.205,34.200.67.142,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,152346,973,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.218.180.121,10.0.52.161,All,All,3.218.180.121,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,149390,173,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,54.86.10.247,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,149234,442,IP Level,Other,Unknown Traffic Path
54.86.10.247,10.0.67.138,All,All,54.86.10.247,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,149234,442,IP Level,Other,Unknown Traffic Path
54.86.10.247,10.0.6.205,All,All,54.86.10.247,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,149234,442,IP Level,Other,Unknown Traffic Path
34.234.11.86,10.0.6.205,All,All,34.234.11.86,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,147220,357,IP Level,Other,Unknown Traffic Path
10.0.6.205,44.218.2.19,All,All,10.0.6.205,44.218.2.19,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,145296,610,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.209.244.110,10.0.6.205,All,All,3.209.244.110,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,145282,406,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,144696,1133,IP Level,Other,Unknown Traffic Path
52.119.224.100,10.0.67.138,All,All,52.119.224.100,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,144099,163,IP Level,Other,Unknown Traffic Path
67.220.245.24,10.0.6.205,All,All,67.220.245.24,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,144029,409,IP Level,Other,Unknown Traffic Path
10.0.67.138,13.126.192.187,All,All,10.0.67.138,13.126.192.187,subnet-00934156b7ada087f,egress,VPC,EC2,1,143742,546,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,44.215.78.151,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,142549,954,IP Level,Other,Unknown Traffic Path
10.0.52.161,44.215.78.151,All,All,10.0.52.161,44.215.78.151,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,142549,954,IP Level,Other,Unknown Traffic Path
52.46.159.244,10.0.6.205,All,All,52.46.159.244,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,142548,394,IP Level,Other,Unknown Traffic Path
3.94.239.84,10.0.92.77,All,All,3.94.239.84,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,141223,178,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,3.94.239.84,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,141223,178,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,139676,530,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,34.200.67.142,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,139345,419,IP Level,Other,Unknown Traffic Path
34.200.67.142,10.0.52.161,All,All,34.200.67.142,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,139345,419,IP Level,Other,Unknown Traffic Path
3.239.232.213,10.0.52.161,All,All,3.239.232.213,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,137915,545,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.239.232.213,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,137915,545,IP Level,Other,Unknown Traffic Path
52.119.232.78,10.0.82.141,All,All,52.119.232.78,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,137712,157,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.67.138,All,All,10.0.76.12,10.0.67.138,subnet-00934156b7ada087f,egress,VPC,VPC,1,137248,367,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.67.138,All,All,10.0.76.12,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,137248,367,IP Level,Other,Unknown Traffic Path
10.0.6.205,54.144.248.163,All,All,10.0.6.205,54.144.248.163,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,135626,563,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,10.0.59.76,All,All,10.0.67.138,10.0.59.76,subnet-00934156b7ada087f,egress,VPC,VPC,1,133340,369,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.59.76,All,All,10.0.67.138,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,133340,369,IP Level,Other,Unknown Traffic Path
3.218.180.131,10.0.52.161,All,All,3.218.180.131,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,129720,155,IP Level,Other,Unknown Traffic Path
10.0.6.205,34.207.48.146,All,All,10.0.6.205,34.207.48.146,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,127784,1255,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
52.119.198.91,10.0.6.205,All,All,52.119.198.91,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,127366,355,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,3.94.239.84,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,126624,162,IP Level,Other,Unknown Traffic Path
3.94.239.84,10.0.66.24,All,All,3.94.239.84,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,126624,162,IP Level,Other,Unknown Traffic Path
3.239.232.89,10.0.67.138,All,All,3.239.232.89,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,125782,523,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.89,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,125782,523,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,67.220.246.91,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,125672,572,IP Level,Other,Unknown Traffic Path
67.220.246.91,10.0.6.205,All,All,67.220.246.91,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,125672,572,IP Level,Other,Unknown Traffic Path
67.220.246.91,10.0.82.141,All,All,67.220.246.91,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,125672,572,IP Level,Other,Unknown Traffic Path
3.218.180.110,10.0.52.161,All,All,3.218.180.110,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,124924,131,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.52.161,All,All,10.0.59.76,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,124436,337,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.52.161,All,All,10.0.59.76,10.0.52.161,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,124436,337,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.219.63.228,All,All,10.0.6.205,3.219.63.228,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,123713,683,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,34.229.28.141,All,All,10.0.67.138,34.229.28.141,subnet-00934156b7ada087f,egress,VPC,EC2,1,122771,947,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.229.28.141,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,122771,950,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.213.207.164,All,All,10.0.82.141,3.213.207.164,subnet-0f90780670d905556,egress,VPC,EC2,1,122440,851,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,3.213.207.164,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,122440,852,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.203.162.156,All,All,10.0.82.141,52.203.162.156,subnet-0f90780670d905556,egress,VPC,EC2,1,121463,782,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,121463,782,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.209.244.110,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,119456,340,IP Level,Other,Unknown Traffic Path
3.209.244.110,10.0.67.138,All,All,3.209.244.110,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,119456,340,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.110,All,All,10.0.52.161,3.218.180.110,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,119294,107,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,10.0.92.77,All,All,52.200.147.156,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,118530,157,IP Level,Other,Unknown Traffic Path
52.200.147.156,10.0.92.77,All,All,52.200.147.156,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,118530,157,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.178,All,All,10.0.82.141,3.218.181.178,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,117923,138,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,35.171.174.60,All,All,10.0.6.205,35.171.174.60,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,116538,483,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,3.218.180.188,All,All,10.0.52.161,3.218.180.188,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,116141,124,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.92.215,10.0.82.141,All,All,10.0.92.215,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,115298,322,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.82.141,All,All,10.0.92.215,10.0.82.141,subnet-0f90780670d905556,egress,VPC,VPC,1,115298,322,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,112224,851,IP Level,Other,Unknown Traffic Path
10.0.67.138,34.202.28.68,All,All,10.0.67.138,34.202.28.68,subnet-00934156b7ada087f,egress,VPC,EC2,1,112224,852,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,3.85.58.70,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,112047,146,IP Level,Other,Unknown Traffic Path
3.85.58.70,10.0.66.24,All,All,3.85.58.70,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,112047,146,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,44.218.109.122,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,111973,145,IP Level,Other,Unknown Traffic Path
44.218.109.122,10.0.66.24,All,All,44.218.109.122,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,111973,145,IP Level,Other,Unknown Traffic Path
34.200.67.142,10.0.82.141,All,All,34.200.67.142,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,111716,314,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,34.200.67.142,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,111716,314,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.180.148,All,All,10.0.67.138,3.218.180.148,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,111669,106,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,13.126.192.187,All,All,10.0.82.141,13.126.192.187,subnet-0f90780670d905556,egress,VPC,EC2,1,110654,422,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,110654,422,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.113,All,All,10.0.52.161,3.218.180.113,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,110497,118,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.82.141,3.218.181.112,All,All,10.0.82.141,3.218.181.112,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,110460,107,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,10.0.6.205,All,All,10.0.52.161,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,109939,921,IP Level,Other,Unknown Traffic Path
10.0.52.161,34.237.177.62,All,All,10.0.52.161,34.237.177.62,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,109939,921,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.119.232.148,All,All,10.0.82.141,52.119.232.148,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,108612,111,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.92.215,10.0.67.138,All,All,10.0.92.215,10.0.67.138,subnet-0f90780670d905556,egress,VPC,VPC,1,107994,306,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.67.138,All,All,10.0.92.215,10.0.67.138,subnet-00934156b7ada087f,ingress,VPC,VPC,,107994,306,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.85.58.70,All,All,10.0.6.205,3.85.58.70,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,107452,448,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,10.0.92.215,All,All,10.0.82.141,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,107254,295,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.82.141,All,All,10.0.76.12,10.0.82.141,subnet-00934156b7ada087f,egress,VPC,VPC,1,105957,296,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.82.141,All,All,10.0.76.12,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,105957,296,IP Level,Other,Unknown Traffic Path
54.144.248.163,10.0.58.37,All,All,54.144.248.163,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,105468,134,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,All,All,54.144.248.163,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,105468,134,IP Level,Other,Unknown Traffic Path
52.46.141.158,10.0.6.205,All,All,52.46.141.158,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,103773,276,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.92.215,All,All,10.0.82.141,10.0.92.215,subnet-0f90780670d905556,egress,VPC,VPC,1,103748,280,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.86.65.104,All,All,10.0.6.205,52.86.65.104,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,103699,789,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.52.161,All,All,3.239.232.0,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,103574,414,IP Level,Other,Unknown Traffic Path
3.239.232.0,10.0.52.161,All,All,3.239.232.0,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,103574,414,IP Level,Other,Unknown Traffic Path
3.239.232.0,10.0.82.141,All,All,3.239.232.0,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,101559,395,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.0,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,101559,395,IP Level,Other,Unknown Traffic Path
10.0.67.138,35.154.158.236,All,All,10.0.67.138,35.154.158.236,subnet-00934156b7ada087f,egress,VPC,EC2,1,101050,394,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,101050,394,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.92.215,All,All,10.0.67.138,10.0.92.215,subnet-00934156b7ada087f,egress,VPC,VPC,1,100410,271,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.92.215,All,All,10.0.67.138,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,100410,271,IP Level,Other,Unknown Traffic Path
34.200.67.142,10.0.67.138,All,All,34.200.67.142,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,99982,271,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,34.200.67.142,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,99982,271,IP Level,Other,Unknown Traffic Path
10.0.52.161,3.218.180.175,All,All,10.0.52.161,3.218.180.175,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,99818,101,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.180.175,10.0.52.161,All,All,3.218.180.175,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,98901,108,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.12,All,All,10.0.67.138,3.218.182.12,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,98018,104,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,3.94.239.84,All,All,10.0.6.205,3.94.239.84,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,97994,409,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.52.161,13.126.192.187,All,All,10.0.52.161,13.126.192.187,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,97789,380,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,13.126.192.187,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,97789,380,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.76.12,All,All,10.0.67.138,10.0.76.12,subnet-00934156b7ada087f,egress,VPC,VPC,1,96935,309,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.76.12,All,All,10.0.67.138,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,96935,309,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.52.161,All,All,10.0.92.215,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,96756,267,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.52.161,All,All,10.0.92.215,10.0.52.161,subnet-0f90780670d905556,egress,VPC,VPC,1,96756,267,IP Level,Other,Unknown Traffic Path
34.200.53.255,10.0.82.141,All,All,34.200.53.255,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,96345,302,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,34.200.53.255,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,96345,302,IP Level,Other,Unknown Traffic Path
34.200.53.255,10.0.6.205,All,All,34.200.53.255,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,96345,302,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.52.161,All,All,10.0.76.12,10.0.52.161,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,94856,260,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.52.161,All,All,10.0.76.12,10.0.52.161,subnet-00934156b7ada087f,egress,VPC,VPC,1,94856,260,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.82.141,All,All,10.0.59.76,10.0.82.141,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,94752,258,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.82.141,All,All,10.0.59.76,10.0.82.141,subnet-0f90780670d905556,ingress,VPC,VPC,,94752,258,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.59.76,All,All,10.0.52.161,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,94449,283,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.59.76,All,All,10.0.52.161,10.0.59.76,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,94449,283,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,93616,345,IP Level,Other,Unknown Traffic Path
10.0.67.138,15.206.245.253,All,All,10.0.67.138,15.206.245.253,subnet-00934156b7ada087f,egress,VPC,EC2,1,93616,345,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.76.12,All,All,10.0.82.141,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,92987,249,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.76.12,All,All,10.0.82.141,10.0.76.12,subnet-0f90780670d905556,egress,VPC,VPC,1,92987,249,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,18.233.11.67,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,92727,302,IP Level,Other,Unknown Traffic Path
18.233.11.67,10.0.82.141,All,All,18.233.11.67,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,92727,302,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,92222,543,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.203.162.156,All,All,10.0.67.138,52.203.162.156,subnet-00934156b7ada087f,egress,VPC,EC2,1,92222,544,IP Level,Other,Unknown Traffic Path
52.5.63.226,10.0.6.205,All,All,52.5.63.226,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,91531,284,IP Level,Other,Unknown Traffic Path
52.5.63.226,10.0.67.138,All,All,52.5.63.226,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,91531,284,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,52.5.63.226,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,91531,284,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,34.229.28.141,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,91454,276,IP Level,Other,Unknown Traffic Path
34.229.28.141,10.0.52.161,All,All,34.229.28.141,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,91454,276,IP Level,Other,Unknown Traffic Path
10.0.6.205,34.234.11.86,All,All,10.0.6.205,34.234.11.86,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,91355,371,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.234.161.29,10.0.6.205,All,All,3.234.161.29,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,90965,287,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,34.234.11.86,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,89996,225,IP Level,Other,Unknown Traffic Path
34.234.11.86,10.0.67.138,All,All,34.234.11.86,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,89996,225,IP Level,Other,Unknown Traffic Path
3.226.114.224,10.0.82.141,All,All,3.226.114.224,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,89202,290,IP Level,Other,Unknown Traffic Path
3.226.114.224,10.0.6.205,All,All,3.226.114.224,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,89202,290,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.226.114.224,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,89202,290,IP Level,Other,Unknown Traffic Path
3.236.169.126,10.0.52.161,All,All,3.236.169.126,10.0.52.161,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,89201,337,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.236.169.126,10.0.52.161,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,89201,338,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,52.203.162.156,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,89049,490,IP Level,Other,Unknown Traffic Path
10.0.52.161,52.203.162.156,All,All,10.0.52.161,52.203.162.156,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,89049,490,IP Level,Other,Unknown Traffic Path
3.218.180.113,10.0.52.161,All,All,3.218.180.113,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,88133,103,IP Level,Other,Unknown Traffic Path
67.220.244.190,10.0.6.205,All,All,67.220.244.190,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,87779,243,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.46.159.244,All,All,10.0.6.205,52.46.159.244,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,87145,266,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,34.237.177.62,All,All,10.0.67.138,34.237.177.62,subnet-00934156b7ada087f,egress,VPC,EC2,1,87087,484,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.237.177.62,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,87087,484,IP Level,Other,Unknown Traffic Path
3.218.181.178,10.0.82.141,All,All,3.218.181.178,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,86253,125,IP Level,Other,Unknown Traffic Path
10.0.82.141,35.154.158.236,All,All,10.0.82.141,35.154.158.236,subnet-0f90780670d905556,egress,VPC,EC2,1,85232,335,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,85232,335,IP Level,Other,Unknown Traffic Path
10.0.52.161,18.233.11.67,All,All,10.0.52.161,18.233.11.67,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,85232,624,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,18.233.11.67,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,85232,624,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.234.161.29,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,83861,273,IP Level,Other,Unknown Traffic Path
3.234.161.29,10.0.82.141,All,All,3.234.161.29,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,83861,273,IP Level,Other,Unknown Traffic Path
50.16.180.250,10.0.6.205,All,All,50.16.180.250,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,83780,262,IP Level,Other,Unknown Traffic Path
54.226.219.31,10.0.6.205,All,All,54.226.219.31,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,82719,257,IP Level,Other,Unknown Traffic Path
54.226.219.31,10.0.67.138,All,All,54.226.219.31,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,82719,257,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,54.226.219.31,10.0.67.138,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,82719,257,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.92.215,All,All,10.0.52.161,10.0.92.215,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,82694,224,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.92.215,All,All,10.0.52.161,10.0.92.215,subnet-0f90780670d905556,ingress,VPC,VPC,,82694,224,IP Level,Other,Unknown Traffic Path
52.119.232.208,10.0.92.77,All,All,52.119.232.208,10.0.92.77,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,82367,62,IP Level,Other,Unknown Traffic Path
3.234.161.29,10.0.67.138,All,All,3.234.161.29,10.0.67.138,subnet-00934156b7ada087f,ingress,EC2,VPC,,82111,254,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.207.48.146,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,81042,775,IP Level,Other,Unknown Traffic Path
10.0.67.138,34.207.48.146,All,All,10.0.67.138,34.207.48.146,subnet-00934156b7ada087f,egress,VPC,EC2,1,81042,776,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.34,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,80445,225,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.94.238,All,All,3.239.232.34,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,80445,225,IP Level,Other,Unknown Traffic Path
10.0.82.141,34.202.28.68,All,All,10.0.82.141,34.202.28.68,subnet-0f90780670d905556,egress,VPC,EC2,1,79178,603,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,34.202.28.68,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,79178,603,IP Level,Other,Unknown Traffic Path
10.0.6.205,67.220.245.24,All,All,10.0.6.205,67.220.245.24,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,79032,245,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.58.37,3.218.180.102,All,All,10.0.58.37,3.218.180.102,subnet-09782dd538ae12c7c,egress,VPC,DYNAMODB,7,78123,106,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
52.86.65.104,10.0.82.141,All,All,52.86.65.104,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,78031,232,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,52.86.65.104,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,78031,232,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.92.77,All,All,10.0.92.215,10.0.92.77,subnet-0f90780670d905556,egress,VPC,VPC,1,77918,200,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.92.77,All,All,10.0.92.215,10.0.92.77,subnet-0f90780670d905556,ingress,VPC,VPC,,77918,200,IP Level,Other,Unknown Traffic Path
3.218.180.188,10.0.52.161,All,All,3.218.180.188,10.0.52.161,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,77876,104,IP Level,Other,Unknown Traffic Path
52.200.147.156,10.0.66.24,All,All,52.200.147.156,10.0.66.24,subnet-00934156b7ada087f,ingress,EC2,VPC,,77859,96,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.66.24,All,All,52.200.147.156,10.0.66.24,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,77859,96,IP Level,Other,Unknown Traffic Path
67.220.244.191,10.0.6.205,All,All,67.220.244.191,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,77222,218,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,52.45.125.112,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,77042,237,IP Level,Other,Unknown Traffic Path
52.45.125.112,10.0.6.205,All,All,52.45.125.112,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,77042,237,IP Level,Other,Unknown Traffic Path
52.45.125.112,10.0.52.161,All,All,52.45.125.112,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,77042,237,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.219.63.228,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,77017,444,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.219.63.228,All,All,10.0.67.138,3.219.63.228,subnet-00934156b7ada087f,egress,VPC,EC2,1,77017,444,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,All,All,44.218.2.19,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,76344,103,IP Level,Other,Unknown Traffic Path
44.218.2.19,10.0.58.37,All,All,44.218.2.19,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,76344,103,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.76.12,All,All,10.0.52.161,10.0.76.12,subnet-00934156b7ada087f,ingress,VPC,VPC,,76159,222,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.76.12,All,All,10.0.52.161,10.0.76.12,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,76159,222,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.59.76,All,All,10.0.82.141,10.0.59.76,subnet-0f90780670d905556,egress,VPC,VPC,1,75635,213,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.59.76,All,All,10.0.82.141,10.0.59.76,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,75635,213,IP Level,Other,Unknown Traffic Path
3.239.232.78,10.0.56.117,All,All,3.239.232.78,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,75139,213,IP Level,Other,Unknown Traffic Path
3.239.232.11,10.0.94.238,All,All,3.239.232.11,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,74742,212,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.11,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,74742,212,IP Level,Other,Unknown Traffic Path
3.218.180.148,10.0.67.138,All,All,3.218.180.148,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,74716,95,IP Level,Other,Unknown Traffic Path
52.119.232.148,10.0.82.141,All,All,52.119.232.148,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,74396,93,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.125,All,All,10.0.82.141,3.218.181.125,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,74172,67,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.6.205,3.209.244.110,All,All,10.0.6.205,3.209.244.110,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,74048,357,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
3.239.232.240,10.0.67.138,All,All,3.239.232.240,10.0.67.138,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,71943,285,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.67.138,All,All,3.239.232.240,10.0.67.138,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,71943,285,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.181.112,All,All,10.0.67.138,3.218.181.112,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,71726,65,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.67.138,10.0.6.205,All,All,10.0.67.138,52.86.65.104,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,71147,569,IP Level,Other,Unknown Traffic Path
10.0.67.138,52.86.65.104,All,All,10.0.67.138,52.86.65.104,subnet-00934156b7ada087f,egress,VPC,EC2,1,71147,569,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.66.24,All,All,10.0.92.215,10.0.66.24,subnet-0f90780670d905556,egress,VPC,VPC,1,70532,176,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.66.24,All,All,10.0.92.215,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,70532,176,IP Level,Other,Unknown Traffic Path
3.218.181.112,10.0.82.141,All,All,3.218.181.112,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,70333,88,IP Level,Other,Unknown Traffic Path
3.218.181.179,10.0.93.202,All,All,3.218.181.179,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,70198,106,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.52.161,All,All,3.219.63.228,10.0.52.161,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,70153,193,IP Level,Other,Unknown Traffic Path
3.219.63.228,10.0.52.161,All,All,3.219.63.228,10.0.52.161,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,70153,193,IP Level,Other,Unknown Traffic Path
3.218.181.136,10.0.93.202,All,All,3.218.181.136,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,69994,103,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.180.157,All,All,10.0.67.138,3.218.180.157,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,69056,76,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
67.220.243.238,10.0.6.205,All,All,67.220.243.238,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,68636,188,IP Level,Other,Unknown Traffic Path
3.239.232.180,10.0.94.238,All,All,3.239.232.180,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,68224,200,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.180,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,68224,200,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.119.198.91,All,All,10.0.6.205,52.119.198.91,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,68199,227,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.56.117,All,All,3.239.232.78,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,67860,193,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.19,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,67127,190,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.94.238,All,All,3.239.232.19,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,67127,190,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.200.147.156,All,All,10.0.6.205,52.200.147.156,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,66378,276,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.82.141,15.206.245.253,All,All,10.0.82.141,15.206.245.253,subnet-0f90780670d905556,egress,VPC,EC2,1,66165,251,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,66165,251,IP Level,Other,Unknown Traffic Path
10.0.82.141,3.218.181.185,All,All,10.0.82.141,3.218.181.185,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,66066,62,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
3.218.182.12,10.0.67.138,All,All,3.218.182.12,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,64208,94,IP Level,Other,Unknown Traffic Path
104.156.155.3,10.0.6.205,All,All,104.156.155.3,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,64200,1605,IP Level,Other,Unknown Traffic Path
3.218.180.131,10.0.53.255,All,All,3.218.180.131,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,64080,99,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,50.16.180.250,10.0.82.141,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,63992,205,IP Level,Other,Unknown Traffic Path
50.16.180.250,10.0.82.141,All,All,50.16.180.250,10.0.82.141,subnet-0f90780670d905556,ingress,EC2,VPC,,63992,205,IP Level,Other,Unknown Traffic Path
3.218.180.125,10.0.53.255,All,All,3.218.180.125,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63984,99,IP Level,Other,Unknown Traffic Path
3.218.180.141,10.0.53.255,All,All,3.218.180.141,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63852,96,IP Level,Other,Unknown Traffic Path
52.119.226.80,10.0.66.24,All,All,52.119.226.80,10.0.66.24,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,63800,144,IP Level,Other,Unknown Traffic Path
3.218.181.125,10.0.82.141,All,All,3.218.181.125,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,63789,73,IP Level,Other,Unknown Traffic Path
3.218.180.120,10.0.53.255,All,All,3.218.180.120,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63780,96,IP Level,Other,Unknown Traffic Path
3.218.180.105,10.0.53.255,All,All,3.218.180.105,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63752,95,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,54.86.10.247,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,63741,295,IP Level,Other,Unknown Traffic Path
10.0.6.205,54.86.10.247,All,All,10.0.6.205,54.86.10.247,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,63741,295,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.67.138,54.86.10.247,All,All,10.0.67.138,54.86.10.247,subnet-00934156b7ada087f,egress,VPC,EC2,1,63741,295,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.66.24,All,All,10.0.59.76,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,63718,163,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.66.24,All,All,10.0.59.76,10.0.66.24,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,63718,163,IP Level,Other,Unknown Traffic Path
3.218.180.109,10.0.58.37,All,All,3.218.180.109,10.0.58.37,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,63512,137,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,All,All,3.94.239.84,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,63386,82,IP Level,Other,Unknown Traffic Path
3.94.239.84,10.0.58.37,All,All,3.94.239.84,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,63386,82,IP Level,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,All,All,10.0.66.24,44.218.2.19,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,63356,268,IP Level,Other,Unknown Traffic Path
10.0.66.24,44.218.2.19,All,All,10.0.66.24,44.218.2.19,subnet-00934156b7ada087f,egress,VPC,EC2,1,63356,268,IP Level,Other,Unknown Traffic Path
44.213.45.216,10.0.6.205,All,All,44.213.45.216,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,63280,2260,IP Level,Other,Unknown Traffic Path
10.0.67.138,18.233.11.67,All,All,10.0.67.138,18.233.11.67,subnet-00934156b7ada087f,egress,VPC,EC2,1,62412,376,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,18.233.11.67,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,62412,376,IP Level,Other,Unknown Traffic Path
10.0.52.161,35.154.158.236,All,All,10.0.52.161,35.154.158.236,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,62069,235,IP Level,Other,Unknown Traffic Path
3.218.181.112,10.0.67.138,All,All,3.218.181.112,10.0.67.138,subnet-00934156b7ada087f,ingress,DYNAMODB,VPC,,61988,76,IP Level,Other,Unknown Traffic Path
52.46.145.233,10.0.6.205,All,All,52.46.145.233,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,61662,170,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.34,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,61152,174,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.56.117,All,All,3.239.232.34,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,61152,174,IP Level,Other,Unknown Traffic Path
10.0.52.161,15.206.245.253,All,All,10.0.52.161,15.206.245.253,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,61018,234,IP Level,Other,Unknown Traffic Path
52.119.199.68,10.0.6.205,All,All,52.119.199.68,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,60873,164,IP Level,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,All,All,10.0.92.77,3.85.58.70,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,60206,253,IP Level,Other,Unknown Traffic Path
10.0.92.77,3.85.58.70,All,All,10.0.92.77,3.85.58.70,subnet-0f90780670d905556,egress,VPC,EC2,1,60206,253,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.209.244.110,All,All,10.0.67.138,3.209.244.110,subnet-00934156b7ada087f,egress,VPC,EC2,1,59916,295,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,3.209.244.110,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59916,295,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.68.125,All,All,3.239.232.107,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,59854,169,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.107,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,59854,169,IP Level,Other,Unknown Traffic Path
10.0.6.205,44.218.109.122,All,All,10.0.6.205,44.218.109.122,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,59846,249,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.92.77,44.218.2.19,All,All,10.0.92.77,44.218.2.19,subnet-0f90780670d905556,egress,VPC,EC2,1,59790,249,IP Level,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,All,All,10.0.92.77,44.218.2.19,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59790,249,IP Level,Other,Unknown Traffic Path
10.0.82.141,34.200.67.142,All,All,10.0.82.141,34.200.67.142,subnet-0f90780670d905556,egress,VPC,EC2,1,59017,300,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,59017,300,IP Level,Other,Unknown Traffic Path
3.239.232.180,10.0.56.117,All,All,3.239.232.180,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,58907,163,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.180,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58907,163,IP Level,Other,Unknown Traffic Path
3.218.181.185,10.0.82.141,All,All,3.218.181.185,10.0.82.141,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,58772,70,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.107,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58614,164,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.94.238,All,All,3.239.232.107,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,58614,164,IP Level,Other,Unknown Traffic Path
3.239.232.0,10.0.56.117,All,All,3.239.232.0,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,58556,164,IP Level,Other,Unknown Traffic Path
104.156.155.9,10.0.6.205,All,All,104.156.155.9,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,58400,1460,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.9,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58394,162,IP Level,Other,Unknown Traffic Path
3.239.232.213,10.0.68.125,All,All,3.239.232.213,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,58394,162,IP Level,Other,Unknown Traffic Path
3.239.232.9,10.0.68.125,All,All,3.239.232.9,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,58394,162,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.213,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,58394,162,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,35.154.158.236,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,58101,220,IP Level,Other,Unknown Traffic Path
3.218.180.12,10.0.53.255,All,All,3.218.180.12,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57638,89,IP Level,Other,Unknown Traffic Path
3.218.181.109,10.0.93.202,All,All,3.218.181.109,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57614,89,IP Level,Other,Unknown Traffic Path
3.218.181.101,10.0.93.202,All,All,3.218.181.101,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57590,89,IP Level,Other,Unknown Traffic Path
3.218.181.192,10.0.93.202,All,All,3.218.181.192,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57586,88,IP Level,Other,Unknown Traffic Path
3.218.180.180,10.0.53.255,All,All,3.218.180.180,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57510,87,IP Level,Other,Unknown Traffic Path
3.218.180.181,10.0.53.255,All,All,3.218.180.181,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57486,87,IP Level,Other,Unknown Traffic Path
3.218.181.154,10.0.93.202,All,All,3.218.181.154,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,57434,86,IP Level,Other,Unknown Traffic Path
3.218.180.14,10.0.53.255,All,All,3.218.180.14,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57410,86,IP Level,Other,Unknown Traffic Path
3.218.180.159,10.0.53.255,All,All,3.218.180.159,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,57306,84,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,15.206.245.253,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,56960,219,IP Level,Other,Unknown Traffic Path
10.0.92.77,54.144.248.163,All,All,10.0.92.77,54.144.248.163,subnet-0f90780670d905556,egress,VPC,EC2,1,56740,235,IP Level,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,All,All,10.0.92.77,54.144.248.163,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,56740,235,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.92.77,All,All,10.0.59.76,10.0.92.77,subnet-0f90780670d905556,ingress,VPC,VPC,,56436,141,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.92.77,All,All,10.0.59.76,10.0.92.77,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,56436,141,IP Level,Other,Unknown Traffic Path
10.0.56.117,3.239.232.78,All,All,10.0.56.117,3.239.232.78,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,55320,163,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.234.11.86,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,55099,229,IP Level,Other,Unknown Traffic Path
10.0.67.138,34.234.11.86,All,All,10.0.67.138,34.234.11.86,subnet-00934156b7ada087f,egress,VPC,EC2,1,54995,227,IP Level,Other,Unknown Traffic Path
3.239.232.34,10.0.68.125,All,All,3.239.232.34,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,53256,151,IP Level,Other,Unknown Traffic Path
3.239.232.70,10.0.68.125,All,All,3.239.232.70,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,53250,152,IP Level,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,All,All,10.0.92.77,35.171.174.60,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,53082,214,IP Level,Other,Unknown Traffic Path
10.0.92.77,35.171.174.60,All,All,10.0.92.77,35.171.174.60,subnet-0f90780670d905556,egress,VPC,EC2,1,53082,214,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.19,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,52891,149,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.56.117,All,All,3.239.232.19,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,52891,149,IP Level,Other,Unknown Traffic Path
52.119.199.54,10.0.6.205,All,All,52.119.199.54,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,52758,149,IP Level,Other,Unknown Traffic Path
104.156.155.2,10.0.6.205,All,All,104.156.155.2,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,52440,1311,IP Level,Other,Unknown Traffic Path
67.220.243.234,10.0.6.205,All,All,67.220.243.234,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,52113,146,IP Level,Other,Unknown Traffic Path
3.239.232.107,10.0.56.117,All,All,3.239.232.107,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,52004,148,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.107,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,52004,148,IP Level,Other,Unknown Traffic Path
10.0.6.205,3.234.161.29,All,All,10.0.6.205,3.234.161.29,subnet-06c17d9828f92e7fc,egress,VPC,EC2,8,51531,489,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.94.238,3.239.232.34,All,All,10.0.94.238,3.239.232.34,subnet-0f90780670d905556,egress,VPC,AMAZON,1,51424,167,IP Level,Other,Unknown Traffic Path
3.218.181.12,10.0.93.202,All,All,3.218.181.12,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51300,81,IP Level,Other,Unknown Traffic Path
3.218.180.188,10.0.53.255,All,All,3.218.180.188,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51272,80,IP Level,Other,Unknown Traffic Path
3.218.181.177,10.0.93.202,All,All,3.218.181.177,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51248,80,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.0,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51225,143,IP Level,Other,Unknown Traffic Path
3.218.180.10,10.0.53.255,All,All,3.218.180.10,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51220,79,IP Level,Other,Unknown Traffic Path
3.218.180.171,10.0.53.255,All,All,3.218.180.171,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51196,79,IP Level,Other,Unknown Traffic Path
3.239.232.89,10.0.94.238,All,All,3.239.232.89,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,51167,143,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.94.238,All,All,3.239.232.89,10.0.94.238,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51167,143,IP Level,Other,Unknown Traffic Path
3.218.180.129,10.0.53.255,All,All,3.218.180.129,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51128,77,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.216,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,51115,142,IP Level,Other,Unknown Traffic Path
3.239.232.216,10.0.56.117,All,All,3.239.232.216,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,51115,142,IP Level,Other,Unknown Traffic Path
3.218.180.135,10.0.53.255,All,All,3.218.180.135,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51092,77,IP Level,Other,Unknown Traffic Path
3.218.180.186,10.0.53.255,All,All,3.218.180.186,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,IP Level,Other,Unknown Traffic Path
3.218.181.104,10.0.93.202,All,All,3.218.181.104,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51068,77,IP Level,Other,Unknown Traffic Path
3.218.180.106,10.0.53.255,All,All,3.218.180.106,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,IP Level,Other,Unknown Traffic Path
3.218.180.158,10.0.53.255,All,All,3.218.180.158,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51068,77,IP Level,Other,Unknown Traffic Path
3.218.180.143,10.0.53.255,All,All,3.218.180.143,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,51040,76,IP Level,Other,Unknown Traffic Path
3.218.181.162,10.0.93.202,All,All,3.218.181.162,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51016,76,IP Level,Other,Unknown Traffic Path
3.218.181.18,10.0.93.202,All,All,3.218.181.18,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,51016,76,IP Level,Other,Unknown Traffic Path
3.218.180.136,10.0.53.255,All,All,3.218.180.136,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,50964,75,IP Level,Other,Unknown Traffic Path
3.218.180.121,10.0.53.255,All,All,3.218.180.121,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,50940,75,IP Level,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,All,All,10.0.66.24,35.171.174.60,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,50760,215,IP Level,Other,Unknown Traffic Path
10.0.66.24,35.171.174.60,All,All,10.0.66.24,35.171.174.60,subnet-00934156b7ada087f,egress,VPC,EC2,1,50760,215,IP Level,Other,Unknown Traffic Path
10.0.56.117,10.0.6.205,All,All,10.0.56.117,3.239.232.78,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,50745,150,IP Level,Other,Unknown Traffic Path
3.218.181.115,10.0.93.202,All,All,3.218.181.115,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,50736,72,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,44.218.109.122,10.0.92.77,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,50302,59,IP Level,Other,Unknown Traffic Path
44.218.109.122,10.0.92.77,All,All,44.218.109.122,10.0.92.77,subnet-0f90780670d905556,ingress,EC2,VPC,,50302,59,IP Level,Other,Unknown Traffic Path
10.0.94.238,3.239.232.11,All,All,10.0.94.238,3.239.232.11,subnet-0f90780670d905556,egress,VPC,AMAZON,1,50160,155,IP Level,Other,Unknown Traffic Path
10.0.94.238,3.239.232.180,All,All,10.0.94.238,3.239.232.180,subnet-0f90780670d905556,egress,VPC,AMAZON,1,49745,154,IP Level,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,All,All,10.0.94.238,3.239.232.180,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,49745,154,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.66.24,All,All,10.0.76.12,10.0.66.24,subnet-00934156b7ada087f,egress,VPC,VPC,1,49362,123,IP Level,Other,Unknown Traffic Path
10.0.76.12,10.0.66.24,All,All,10.0.76.12,10.0.66.24,subnet-00934156b7ada087f,ingress,VPC,VPC,,49362,123,IP Level,Other,Unknown Traffic Path
3.239.232.70,10.0.82.141,All,All,3.239.232.70,10.0.82.141,subnet-0f90780670d905556,ingress,AMAZON,VPC,,49087,195,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.82.141,All,All,3.239.232.70,10.0.82.141,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,49087,195,IP Level,Other,Unknown Traffic Path
10.0.67.138,34.200.67.142,All,All,10.0.67.138,34.200.67.142,subnet-00934156b7ada087f,egress,VPC,EC2,1,48985,266,IP Level,Other,Unknown Traffic Path
10.0.67.138,10.0.6.205,All,All,10.0.67.138,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,48985,266,IP Level,Other,Unknown Traffic Path
10.0.6.205,67.220.244.190,All,All,10.0.6.205,67.220.244.190,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,47944,149,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
13.214.173.166,10.0.6.205,All,All,13.214.173.166,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,EC2,VPC,,47516,1697,IP Level,Other,Unknown Traffic Path
10.0.66.24,54.144.248.163,All,All,10.0.66.24,54.144.248.163,subnet-00934156b7ada087f,egress,VPC,EC2,1,47330,197,IP Level,Other,Unknown Traffic Path
10.0.66.24,10.0.6.205,All,All,10.0.66.24,54.144.248.163,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,47330,197,IP Level,Other,Unknown Traffic Path
10.0.82.141,34.207.48.146,All,All,10.0.82.141,34.207.48.146,subnet-0f90780670d905556,egress,VPC,EC2,1,46742,480,IP Level,Other,Unknown Traffic Path
10.0.82.141,10.0.6.205,All,All,10.0.82.141,34.207.48.146,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,46742,480,IP Level,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,All,All,10.0.94.238,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,46709,152,IP Level,Other,Unknown Traffic Path
10.0.56.117,3.239.232.34,All,All,10.0.56.117,3.239.232.34,subnet-09782dd538ae12c7c,egress,VPC,AMAZON,1,46226,132,IP Level,Other,Unknown Traffic Path
10.0.56.117,10.0.6.205,All,All,10.0.56.117,3.239.232.34,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,46226,132,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.34,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,46157,134,IP Level,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,All,All,10.0.94.238,3.239.232.19,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,45993,136,IP Level,Other,Unknown Traffic Path
10.0.94.238,3.239.232.19,All,All,10.0.94.238,3.239.232.19,subnet-0f90780670d905556,egress,VPC,AMAZON,1,45993,136,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.70,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,45971,132,IP Level,Other,Unknown Traffic Path
10.0.94.238,10.0.6.205,All,All,10.0.94.238,3.239.232.11,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,45562,142,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.236.169.126,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,45392,127,IP Level,Other,Unknown Traffic Path
3.236.169.126,10.0.56.117,All,All,3.236.169.126,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,45392,127,IP Level,Other,Unknown Traffic Path
3.218.181.105,10.0.93.202,All,All,3.218.181.105,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44958,72,IP Level,Other,Unknown Traffic Path
3.218.181.134,10.0.93.202,All,All,3.218.181.134,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44826,69,IP Level,Other,Unknown Traffic Path
3.218.180.145,10.0.53.255,All,All,3.218.180.145,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44802,69,IP Level,Other,Unknown Traffic Path
3.218.180.18,10.0.53.255,All,All,3.218.180.18,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44778,69,IP Level,Other,Unknown Traffic Path
3.218.180.187,10.0.53.255,All,All,3.218.180.187,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44778,69,IP Level,Other,Unknown Traffic Path
3.218.181.174,10.0.93.202,All,All,3.218.181.174,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,IP Level,Other,Unknown Traffic Path
3.218.180.160,10.0.53.255,All,All,3.218.180.160,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44750,68,IP Level,Other,Unknown Traffic Path
3.218.181.188,10.0.93.202,All,All,3.218.181.188,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,IP Level,Other,Unknown Traffic Path
3.218.181.1,10.0.93.202,All,All,3.218.181.1,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44750,68,IP Level,Other,Unknown Traffic Path
3.218.181.120,10.0.93.202,All,All,3.218.181.120,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44698,67,IP Level,Other,Unknown Traffic Path
3.218.180.132,10.0.53.255,All,All,3.218.180.132,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44698,67,IP Level,Other,Unknown Traffic Path
3.239.232.181,10.0.68.125,All,All,3.239.232.181,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,44679,126,IP Level,Other,Unknown Traffic Path
3.218.180.111,10.0.53.255,All,All,3.218.180.111,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44678,68,IP Level,Other,Unknown Traffic Path
3.218.181.189,10.0.93.202,All,All,3.218.181.189,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44674,67,IP Level,Other,Unknown Traffic Path
3.218.181.113,10.0.93.202,All,All,3.218.181.113,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44674,67,IP Level,Other,Unknown Traffic Path
3.218.180.153,10.0.53.255,All,All,3.218.180.153,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44674,67,IP Level,Other,Unknown Traffic Path
3.218.181.180,10.0.93.202,All,All,3.218.181.180,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,IP Level,Other,Unknown Traffic Path
3.218.180.102,10.0.53.255,All,All,3.218.180.102,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44598,66,IP Level,Other,Unknown Traffic Path
3.218.181.125,10.0.93.202,All,All,3.218.181.125,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,IP Level,Other,Unknown Traffic Path
3.218.181.130,10.0.93.202,All,All,3.218.181.130,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44598,66,IP Level,Other,Unknown Traffic Path
3.218.180.155,10.0.53.255,All,All,3.218.180.155,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44598,66,IP Level,Other,Unknown Traffic Path
3.239.232.89,10.0.56.117,All,All,3.239.232.89,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,44563,126,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.89,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44563,126,IP Level,Other,Unknown Traffic Path
3.218.181.124,10.0.93.202,All,All,3.218.181.124,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44550,66,IP Level,Other,Unknown Traffic Path
3.218.180.190,10.0.53.255,All,All,3.218.180.190,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44546,65,IP Level,Other,Unknown Traffic Path
3.218.180.134,10.0.53.255,All,All,3.218.180.134,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44470,64,IP Level,Other,Unknown Traffic Path
3.218.181.190,10.0.93.202,All,All,3.218.181.190,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44470,64,IP Level,Other,Unknown Traffic Path
3.239.232.19,10.0.68.125,All,All,3.239.232.19,10.0.68.125,subnet-00934156b7ada087f,ingress,AMAZON,VPC,,44453,125,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.68.125,All,All,3.239.232.19,10.0.68.125,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44453,125,IP Level,Other,Unknown Traffic Path
10.0.67.138,3.218.182.185,All,All,10.0.67.138,3.218.182.185,subnet-00934156b7ada087f,egress,VPC,DYNAMODB,7,44427,64,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
10.0.52.161,34.200.67.142,All,All,10.0.52.161,34.200.67.142,subnet-09782dd538ae12c7c,egress,VPC,EC2,1,44344,407,IP Level,Other,Unknown Traffic Path
10.0.52.161,10.0.6.205,All,All,10.0.52.161,34.200.67.142,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,44344,407,IP Level,Other,Unknown Traffic Path
52.94.1.202,10.0.53.255,All,All,52.94.1.202,10.0.53.255,subnet-09782dd538ae12c7c,ingress,DYNAMODB,VPC,,44194,75,IP Level,Other,Unknown Traffic Path
52.46.159.244,10.0.92.77,All,All,52.46.159.244,10.0.92.77,subnet-0f90780670d905556,ingress,AMAZON,VPC,,44114,125,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.92.77,All,All,52.46.159.244,10.0.92.77,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,44114,125,IP Level,Other,Unknown Traffic Path
52.94.2.96,10.0.93.202,All,All,52.94.2.96,10.0.93.202,subnet-0f90780670d905556,ingress,DYNAMODB,VPC,,44010,71,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.56.117,All,All,3.239.232.82,10.0.56.117,subnet-06c17d9828f92e7fc,egress,AMAZON,VPC,1,43894,122,IP Level,Other,Unknown Traffic Path
3.239.232.82,10.0.56.117,All,All,3.239.232.82,10.0.56.117,subnet-09782dd538ae12c7c,ingress,AMAZON,VPC,,43894,122,IP Level,Other,Unknown Traffic Path
3.236.169.126,10.0.94.238,All,All,3.236.169.126,10.0.94.238,subnet-0f90780670d905556,ingress,AMAZON,VPC,,43790,120,IP Level,Other,Unknown Traffic Path
10.0.82.141,52.119.228.252,All,All,10.0.82.141,52.119.228.252,subnet-0f90780670d905556,egress,VPC,DYNAMODB,7,43583,57,IP Level,VPC Gateway Endpoint,Through VPC Gateway Endpoint
67.220.251.8,10.0.6.205,All,All,67.220.251.8,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,43469,122,IP Level,Other,Unknown Traffic Path
183.129.178.206,10.0.6.205,All,All,183.129.178.206,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,43440,1086,IP Level,Other,Unknown Traffic Path
80.75.212.75,10.0.6.205,All,All,80.75.212.75,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,-,VPC,,43297,1082,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.58.37,All,All,10.0.92.215,10.0.58.37,subnet-0f90780670d905556,egress,VPC,VPC,1,43164,112,IP Level,Other,Unknown Traffic Path
10.0.92.215,10.0.58.37,All,All,10.0.92.215,10.0.58.37,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,43164,112,IP Level,Other,Unknown Traffic Path
10.0.6.205,52.46.141.158,All,All,10.0.6.205,52.46.141.158,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,43106,151,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.59.76,10.0.58.37,All,All,10.0.59.76,10.0.58.37,subnet-09782dd538ae12c7c,ingress,VPC,VPC,,42340,106,IP Level,Other,Unknown Traffic Path
10.0.59.76,10.0.58.37,All,All,10.0.59.76,10.0.58.37,subnet-09782dd538ae12c7c,egress,VPC,VPC,1,42340,106,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,All,All,44.218.109.122,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42282,55,IP Level,Other,Unknown Traffic Path
44.218.109.122,10.0.58.37,All,All,44.218.109.122,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42282,55,IP Level,Other,Unknown Traffic Path
10.0.6.205,67.220.244.191,All,All,10.0.6.205,67.220.244.191,subnet-06c17d9828f92e7fc,egress,VPC,AMAZON,8,42279,136,IP Level,Internet Gateway,Through Internet Gateway (Nitro-based instances only)
10.0.6.205,10.0.58.37,All,All,3.85.58.70,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42208,54,IP Level,Other,Unknown Traffic Path
35.171.174.60,10.0.58.37,All,All,35.171.174.60,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42208,54,IP Level,Other,Unknown Traffic Path
10.0.6.205,10.0.58.37,All,All,35.171.174.60,10.0.58.37,subnet-06c17d9828f92e7fc,egress,EC2,VPC,1,42208,54,IP Level,Other,Unknown Traffic Path
3.85.58.70,10.0.58.37,All,All,3.85.58.70,10.0.58.37,subnet-09782dd538ae12c7c,ingress,EC2,VPC,,42208,54,IP Level,Other,Unknown Traffic Path
10.0.92.77,10.0.6.205,All,All,10.0.92.77,3.94.239.84,subnet-06c17d9828f92e7fc,ingress,VPC,EC2,,41062,171,IP Level,Other,Unknown Traffic Path
10.0.92.77,3.94.239.84,All,All,10.0.92.77,3.94.239.84,subnet-0f90780670d905556,egress,VPC,EC2,1,41062,171,IP Level,Other,Unknown Traffic Path
67.220.245.25,10.0.6.205,All,All,67.220.245.25,10.0.6.205,subnet-06c17d9828f92e7fc,ingress,AMAZON,VPC,,40933,120,IP Level,Other,Unknown Traffic Path
10.0.68.125,3.239.232.107,All,All,10.0.68.125,3.239.232.107,subnet-00934156b7ada087f,egress,VPC,AMAZON,1,40748,118,IP Level,Other,Unknown Traffic Path
10.0.68.125,10.0.6.205,All,All,10.0.68.125,3.239.232.107,subnet-06c17d9828f92e7fc,ingress,VPC,AMAZON,,40748,118,IP Level,Other,Unknown Traffic Path
`