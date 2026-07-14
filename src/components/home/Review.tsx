import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";

import { servicesdemo } from "../../assets/assets";

type ReviewType = {
    review: string;
    name: string;
    location: string;
    image: string;
    dark?: boolean;
};

const reviews: ReviewType[] = [
    {
        review:
            "From our very first consultation, we knew we were in safe hands. D2E team handled everything, from architectural planning to interiors and final execution for our bungalow in Pune. The final outcome exceeded our expectations.",
        name: "Rohit & Pooja Kulkarni",
        location: "Pune",
        image: servicesdemo,
    },
    {
        review:
            "I approached D2E Ventures for my office in Nashik. Every phase of the project was managed professionally, from planning to execution. Their project management, regular updates, and quality control gave me complete confidence. Delivered on time, exactly as I envisioned.",
        name: "Shreyas Deshmukh",
        location: "Nashik",
        image: servicesdemo,
        dark: true,
    },
    {
        review:
            "Designing our first home was a big decision, and the whole team made the entire journey effortless. They understood our lifestyle, suggested practical solutions, and created interiors that matched our vision. They took care of everything while we focused on our family.",
        name: "Neha & Aditya Patil",
        location: "Kolhapur",
        image: servicesdemo,
    },
    {
        review:
            "After consulting multiple firms across Maharashtra, we chose D2E Ventures for their complete end-to-end solutions. Their team guided us from plot planning and design consultation to construction and interiors. We highly recommend D2E Venture to anyone looking for a reliable architecture and construction partner.",
        name: "Dr. Akshay & Dr. Rutuja Joshi",
        location: "Sangli",
        image: servicesdemo,
        dark: true,
    },
];

const Review = () => {
    return (
        <Box
            w="100%"
            h={{ base: "auto", lg: "100vh" }}
            minH={{ base: "auto", lg: "700px" }}
            bg="#FAF9F6"
            overflow="hidden"
        >
            <Flex
                h="100%"
                maxW="1600px"
                mx="auto"
                px={{
                    base: "6%",
                    md: "8%",
                    lg: "7%",
                }}
                pl={{
                    base: "6%",
                    md: "8%",
                    lg: "20px",
                }}
                py={{
                    base: "70px",
                    md: "80px",
                    lg: "0",
                }}
                direction={{
                    base: "column",
                    lg: "row",
                }}
                alignItems={{
                    base: "flex-start",
                    lg: "center",
                }}
                justifyContent="space-between"
                gap={{
                    base: 12,
                    lg: 20,
                }}
            >
                {/* LEFT HEADING */}

                <Box
                    w={{
                        base: "100%",
                        lg: "42%",
                    }}
                >
                    <Text
                        fontSize={{
                            base: "30px",
                            md: "38px",
                            lg: "44px",
                        }}
                        lineHeight="1.05"
                        color="#000000"
                        fontWeight="400"
                    >
                        Why people
                        <br />
                        keep
                    </Text>

                    <Text
                        mt={3}
                        fontSize={{
                            base: "48px",
                            md: "58px",
                            lg: "68px",
                        }}
                        lineHeight="1"
                        color="#000000"
                        fontWeight="700"
                    >
                        Coming
                        <br />
                        Back?
                    </Text>
                </Box>

                {/* REVIEWS */}
                <Flex w={{
                    base: "100%",
                    lg: "32%",
                }} alignItems={'flex-end'} h='100vh'>
                    <Flex

                        h={{
                            base: "550px",
                            md: "620px",
                            lg: "70vh",
                        }}

                        maxH={{
                            lg: "100%",
                        }}
                        overflow="hidden"

                    >
                        <Swiper
                            direction="vertical"
                            slidesPerView="auto"
                            spaceBetween={18}
                            mousewheel={{
                                forceToAxis: true,
                                releaseOnEdges: false,
                            }}
                            modules={[Mousewheel]}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide
                                    key={index}
                                    style={{
                                        height: "auto",
                                    }}
                                >
                                    <Box
                                        bg={review.dark ? "#1C1B1A" : "#FFFFFF"}
                                        color={review.dark ? "#FFFFFF" : "#1C1B1A"}
                                        border="1px solid"
                                        borderColor="#E6E6E6"
                                        borderRadius="18px"
                                        px={{
                                            base: 5,
                                            md: 7,
                                        }}
                                        py={{
                                            base: 5,
                                            md: 6,
                                        }}
                                        boxShadow={
                                            review.dark
                                                ? "none"
                                                : "0px 4px 5px rgba(0,0,0,0.18)"
                                        }
                                    >
                                        <Text
                                            fontSize={{
                                                base: "14px",
                                                md: "18px",
                                            }}
                                            lineHeight="1.55"
                                            letterSpacing="0.2px"
                                        >
                                            {review.review}
                                        </Text>

                                        <Flex
                                            mt={4}
                                            alignItems="center"
                                            gap={4}
                                        >
                                            <Image
                                                src={review.image}
                                                w={{
                                                    base: "45px",
                                                    md: "55px",
                                                }}
                                                h={{
                                                    base: "45px",
                                                    md: "55px",
                                                }}
                                                borderRadius="50%"
                                                objectFit="cover"
                                            />

                                            <Box>
                                                <Text
                                                    fontSize={{
                                                        base: "13px",
                                                        md: "15px",
                                                    }}
                                                    fontWeight="600"
                                                >
                                                    {review.name}
                                                </Text>

                                                <Flex
                                                    mt={1}
                                                    w="max-content"
                                                    px={3}
                                                    py="1px"
                                                    border="1px solid"
                                                    borderColor={
                                                        review.dark
                                                            ? "#777"
                                                            : "#CCC"
                                                    }
                                                    borderRadius="20px"
                                                >
                                                    <Text
                                                        fontSize="11px"
                                                        lineHeight="1.2"
                                                    >
                                                        {review.location}
                                                    </Text>
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Review;