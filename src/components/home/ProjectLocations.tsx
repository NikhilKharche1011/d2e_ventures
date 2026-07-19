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
                            left={{ base: "4%", md: "4%" }}
                            top={{ base: "36%", md: "36%" }}
                        >
                            <Box
                                w={{ base: "10px", md: "14px" }}
                                h={{ base: "10px", md: "14px" }}
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />

                            <Text
                                position="absolute"
                                left={{ base: "14px", md: "18px" }}
                                top="-8px"
                                whiteSpace="nowrap"
                                fontSize={{
                                    base: "11px",
                                    md: "13px",
                                }}
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Mumbai
                            </Text>
                        </Box>

                        {/* Nashik */}
                        <Box
                            position="absolute"
                            left={{ base: "16%", md: "16%" }}
                            top={{ base: "20%", md: "20%" }}
                        >
                            <Box
                                w={{ base: "8px", md: "10px" }}
                                h={{ base: "8px", md: "10px" }}
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />

                            <Text
                                position="absolute"
                                left={{ base: "12px", md: "16px" }}
                                top="-10px"
                                whiteSpace="nowrap"
                                fontSize={{
                                    base: "11px",
                                    md: "13px",
                                }}
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Nashik
                            </Text>
                        </Box>

                        {/* Konkan */}
                        <Box
                            position="absolute"
                            left={{ base: "5%", md: "5%" }}
                            top={{ base: "45%", md: "45%" }}
                        >
                            <Box
                                w={{ base: "8px", md: "10px" }}
                                h={{ base: "8px", md: "10px" }}
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />

                            <Text
                                position="absolute"
                                left={{ base: "12px", md: "16px" }}
                                top="-10px"
                                whiteSpace="nowrap"
                                fontSize={{
                                    base: "11px",
                                    md: "13px",
                                }}
                                color="#1E1E1E"
                                fontWeight="500"
                            >
                                Konkan
                            </Text>
                        </Box>

                        {/* Pune */}
                        <Box
                            position="absolute"
                            left={{ base: "18%", md: "18%" }}
                            top={{ base: "48%", md: "48%" }}
                        >
                            <Box
                                w={{ base: "14px", md: "20px" }}
                                h={{ base: "14px", md: "20px" }}
                                bg="#C8A96B"
                                borderRadius="full"
                                animation={`${pulse} 1.2s ease-in-out infinite`}
                            />

                            <Text
                                position="absolute"
                                left={{ base: "18px", md: "24px" }}
                                top="-6px"
                                whiteSpace="nowrap"
                                fontSize={{
                                    base: "11px",
                                    md: "13px",
                                }}
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
                    base: 10,
                    md: 14,
                    lg: 20,
                }}
                templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                }}
                gap={{
                    base: 8,
                    md: 0,
                }}

                gapX={{
                    base: 4,
                    md: 0,
                }}

                pt={8}
            >
                {stats.map((item, i) => (
                    <Flex
                        key={i}
                        justify="center"
                        align="flex-start"
                        gap={{
                            base: 3,
                            md: 4,
                        }}
                        py={{
                            base: 2,
                            md: 5,
                        }}
                        px={{
                            base: 2,
                            md: 4,
                        }}
                        borderRight={{
                            base: "none",
                            md:
                                i !== stats.length - 1
                                    ? "1px solid #C8A96B80"
                                    : "none",
                        }}
                    >
                        {/* Icon */}
                        <Flex
                            w={{
                                base: "42px",
                                md: "52px",
                                lg: "60px",
                            }}
                            justify="center"
                            align="flex-start"
                            flexShrink={0}
                            pt="4px"
                        >
                            <Image
                                src={item.icon}
                                w={{
                                    base: "28px",
                                    md: "34px",
                                    lg: "42px",
                                }}
                                h="auto"
                            />
                        </Flex>

                        {/* Text */}
                        <Box
                            flex={1}
                            textAlign="left"
                        >
                            <Text
                                color="#C8A96B"
                                fontWeight="700"
                                lineHeight="1"
                                fontSize={{
                                    base: "24px",
                                    sm: "28px",
                                    md: "30px",
                                    lg: "36px",
                                }}
                            >
                                <CountUp
                                    end={item.end}
                                    suffix={item.suffix}
                                />
                            </Text>

                            <Text
                                mt={2}
                                color="#D9D9D9"
                                lineHeight="1.5"
                                whiteSpace="pre-line"
                                fontSize={{
                                    base: "13px",
                                    sm: "13px",
                                    md: "14px",
                                    lg: "15px",
                                }}
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