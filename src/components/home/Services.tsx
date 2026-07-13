import { useState } from "react";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { servicesdemo } from "../../assets/assets";

const services = [
    { title: "ARCHITECTURE", image: servicesdemo },
    { title: "INTERIOR", image: servicesdemo },
    { title: "PLOTTING", image: servicesdemo },
    { title: "LANDSCAPE", image: servicesdemo },
    { title: "PREMIUM VILLAS", image: servicesdemo },
    { title: "TURNKEY", image: servicesdemo },
];


const Services = () => {
    const [active, setActive] = useState<number | null>(null);

    const shouldDisplay = (currentIndex: number) => {
        if (active === null) return true;

        if (active <= 1) {
            return currentIndex <= 2;
        }

        if (active >= services.length - 2) {
            return currentIndex >= services.length - 3;
        }

        return (
            currentIndex >= active - 1 &&
            currentIndex <= active + 1
        );
    };

    return (
        <Box bg="#1C1B1A" color="white" h={{ base: "auto", lg: "100vh" }}>
            <Flex
                maxW="1500px"
                // mx="auto"
                px={{
                base: "5%",
                xl: "7%",
            }}
                h={{ base: "auto", lg: "28%" }}
                py={{ base: 14, lg: 0 }}
                alignItems="center"
            >
                <Box>
                    <Text
                        fontSize={{ base: "40px", lg: "52px" }}
                        fontWeight="700"
                    >
                        Services
                    </Text>

                    <Text
                        mt={2}
                        fontSize={{ base: "22px", lg: "30px" }}
                    >
                        Tailored to
                    </Text>

                    <Text
                        fontSize={{ base: "38px", lg: "56px" }}
                        fontWeight="700"
                    >
                        Your Needs
                    </Text>
                </Box>
            </Flex>

            <Flex display={{ base: "none", lg: "flex" }} h={{ lg: "72%" }} overflow="hidden" onMouseLeave={() => setActive(null)}>
                {services.map((service, index) => (
                    <Flex
                        key={service.title}
                        flex={
                            active === null
                                ? 1
                                : active === index
                                    ? 4
                                    : shouldDisplay(index)
                                        ? 1
                                        : 0
                        }
                        minW={
                            active === null
                                ? "0"
                                : shouldDisplay(index)
                                    ? "140px"
                                    : "0px"
                        }
                        opacity={
                            active === null
                                ? 1
                                : shouldDisplay(index)
                                    ? 1
                                    : 0
                        }
                        pointerEvents={
                            active === null
                                ? "auto"
                                : shouldDisplay(index)
                                    ? "auto"
                                    : "none"
                        }
                        transition="all .95s cubic-bezier(.22,1,.36,1)"
                        position="relative"
                        cursor="pointer"
                        overflow="hidden"
                        onMouseEnter={() => setActive(index)}
                    >
                        <Image
                            src={service.image}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transition="transform .6s cubic-bezier(.22,1,.36,1)"
                            transform={
                                active === index
                                    ? "scale(1.08)"
                                    : "scale(1)"
                            }
                        />

                        <Box
                            position="absolute"
                            inset={0}
                            bg={
                                active === index
                                    ? "rgba(0,0,0,.20)"
                                    : "rgba(0,0,0,.45)"
                            }
                            transition="background .45s ease"
                        />

                        <Flex
                            position="absolute"
                            inset={0}
                            align="center"
                            justify="center"
                        >
                            <Text
                                letterSpacing="3px"
                                fontWeight="600"
                                whiteSpace="nowrap"
                                transform={
                                    active === index
                                        ? "translateY(-8px)"
                                        : "translateY(0)"
                                }
                                opacity={
                                    active === null || active === index
                                        ? 1
                                        : 0.7
                                }
                                transition="all .35s ease"
                            >
                                {service.title}
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>

            <Grid display={{ base: "none", md: "grid", lg: "none" }} templateColumns="repeat(2,1fr)">
                {services.map((service) => (
                    <Box key={service.title} h="320px" position="relative">
                        <Image
                            src={service.image}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />

                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(0,0,0,.35)"
                        />

                        <Flex
                            position="absolute"
                            inset={0}
                            align="center"
                            justify="center"
                        >
                            <Text fontWeight="600">
                                {service.title}
                            </Text>
                        </Flex>
                    </Box>
                ))}
            </Grid>

            <Grid display={{ base: "grid", md: "none" }} templateColumns="1fr">
                {services.map((service) => (
                    <Box key={service.title} h="220px" position="relative">
                        <Image
                            src={service.image}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />

                        <Box
                            position="absolute"
                            inset={0}
                            bg="rgba(0,0,0,.35)"
                        />

                        <Flex
                            position="absolute"
                            inset={0}
                            align="center"
                            justify="center"
                        >
                            <Text fontWeight="600">
                                {service.title}
                            </Text>
                        </Flex>
                    </Box>
                ))}
            </Grid>
        </Box>
    )
}

export default Services