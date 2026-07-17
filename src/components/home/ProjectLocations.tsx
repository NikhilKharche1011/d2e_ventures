import {
    Box,
    Flex,
    Grid,
    Image,
    Text,
} from "@chakra-ui/react";

import {
    maharashtraMap,
    projectCompleted,
    locationIcon,
    clientsIcon,
    areaIcon,
} from "../../assets/assets";
import CountUp from "../../utlis/CountUp";
import { keyframes } from "@emotion/react";

const stats = [
    {
        icon: projectCompleted,
        end: 30,
        suffix: "+",
        label: "Projects\nCompleted",
    },
    {
        icon: locationIcon,
        end: 12,
        suffix: "+",
        label: "Cities\nTouched",
    },
    {
        icon: clientsIcon,
        end: 500,
        suffix: "+",
        label: "Happy\nClients",
    },
    {
        icon: areaIcon,
        end: 10,
        suffix: "M+",
        label: "Sq. Ft. Developed\n& Delivered",
    },
];
const pulse = keyframes`
    0% {
        transform: scale(0.7);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.7);
    }
`;
const ProjectLocations = () => {
    return (
        <Box
            bg="#1F1D1C"
            color="white"
            mt={{
                base: "-20px",
                md: "-35px",
                lg: "-55px",
            }}
            pt={{
                base: "90px",
                md: "120px",
                lg: "150px",
            }}
            pb={{
                base: "70px",
                lg: "90px",
            }}
            px={{
                base: "5%",
                xl: "7%",
            }}
            position="relative"
            zIndex={0}
        >
            <Grid
                maxW="1500px"
                mx="auto"
                templateColumns={{
                    base: "1fr",
                    lg: "0.9fr 1.1fr",
                }}
                gap={{
                    base: 12,
                    lg: 10,
                }}
                alignItems="center"
            >
                {/* Left */}

                <Flex
                    direction="column"
                    align={{
                        base: "center",
                        lg: "flex-start",
                    }}
                    textAlign={{
                        base: "center",
                        lg: "left",
                    }}
                >
                    <Text

                        fontSize="28px"
                        mb={2}
                    >
                        Rooted in
                    </Text>

                    <Text
                        fontSize={{
                            base: "42px",
                            md: "52px",
                            lg: "58px",
                        }}
                        lineHeight="1.05"
                        fontWeight="700"
                    >
                        Maharashtra
                        <br />
                        Growing
                        <br />
                        Nationwide.
                    </Text>

                    <Text
                        mt={8}
                        lineHeight="1.9"
                        maxW="600px"
                    >
                        From Pune to Mumbai, Nashik to Konkan,
                        D2E Ventures is shaping premium developments
                        across Maharashtra with a commitment to quality,
                        thoughtful planning, and exceptional execution.

                        As our footprint continues to grow,
                        we're extending the same integrated expertise
                        to landmark developments across India.
                    </Text>
                </Flex>

                {/* Right */}

                <Flex justify="center">
                    <Box
                        position="relative"
                        w={{
                            base: "100%",
                            md: "80%",
                            lg: "90%",
                        }}
                        maxW="650px"
                    >
                        <Image
                            src={maharashtraMap}
                            w="100%"
                            display="block"
                        />

                        {/* Mumbai */}
                        <Box
                            position="absolute"
                            left="11%"
                            top="39%"
                            transform="translate(-50%, -50%)"
                        >
                            <Box
                                w="14px"
                                h="14px"
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />
                            <Text
                                mt={1}
                                fontSize="20px"
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Mumbai
                            </Text>
                        </Box>

                        {/* Nashik */}
                        <Box
                            position="absolute"
                            left="23%"
                            top="24%"
                            transform="translate(-50%, -50%)"
                        >
                            <Box
                                w="10px"
                                h="10px"
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />
                            <Text
                                mt={1}
                                fontSize="20px"
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Nashik
                            </Text>
                        </Box>

                        <Box
                            position="absolute"
                            left="19%"
                            top="55%"
                            transform="translate(-50%, -50%)"
                        >
                            <Box
                                w="20px"
                                h="20px"
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />
                            <Text
                                mt={1}
                                fontSize="20px"
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Pune
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Grid>


            <Grid
                maxW="1400px"
                mx="auto"
                mt={{
                    base: 14,
                    lg: 20,
                }}
                templateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(4,1fr)",
                }}
                // borderTop="1px solid rgba(255,255,255,.08)"
                pt={8}
            >
                {stats.map((item, i) => (
                    <Flex
                        key={item.end}
                        justify="center"
                        align="center"
                        gap={5}
                        py={5}
                        borderRight={{
                            md:
                                i !== stats.length - 1
                                    ? "1px solid #C8A96B80"
                                    : "none",
                        }}
                    >
                        <Image
                            src={item.icon}
                            w="34px"
                        />

                        <Box>
                            <Text
                                color="#C8A96B"
                                fontWeight="700"
                                fontSize="30px"
                            >
                                <CountUp end={item.end} suffix={item.suffix} />
                            </Text>

                            <Text
                                color="#D9D9D9"
                                whiteSpace="pre-line"
                                fontSize="15px"
                            >
                                {item.label}
                            </Text>
                        </Box>
                    </Flex>
                ))}
            </Grid>
        </Box>
    );
};

export default ProjectLocations;