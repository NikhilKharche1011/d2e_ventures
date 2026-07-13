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

const stats = [
    {
        icon: projectCompleted,
        value: "30+",
        label: "Projects\nCompleted",
    },
    {
        icon: locationIcon,
        value: "12+",
        label: "Cities\nTouched",
    },
    {
        icon: clientsIcon,
        value: "500+",
        label: "Happy\nClients",
    },
    {
        icon: areaIcon,
        value: "10M+",
        label: "Sq. Ft. Developed\n& Delivered",
    },
];

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
                    <Image
                        src={maharashtraMap}
                        w={{
                            base: "100%",
                            md: "80%",
                            lg: "90%",
                        }}
                        maxW="650px"
                    />
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
                        key={item.value}
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
                                {item.value}
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