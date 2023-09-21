import { useState, useEffect } from "react";

export const mockGetResData = () => {
  const [resC, setResC] = useState([]);
  useEffect(() => {
    mockGet();
  }, []);
  const mockGet = () => {
    const data = [
      {
        info: {
          id: "48087",
          name: "Kanti Sweets",
          cloudinaryImageId: "ee62qkzydm4eacoo2kub",
          locality: "CMH Road",
          areaName: "Indira Nagar",
          costForTwo: "₹150 for two",
          cuisines: ["Sweets"],
          avgRating: 4.6,
          veg: true,
          feeDetails: {
            restaurantId: "48087",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "4700",
          avgRatingString: "4.6",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "22 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-04 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/kanti-sweets-cmh-road-indira-nagar-bangalore-48087",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "752385",
          name: "Great Indian Khichdi by EatFit",
          cloudinaryImageId: "d00bd9d092e31d8e4355960b6d92046b",
          locality: "Hoysala Nagar",
          areaName: "Indira Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
          avgRating: 4.2,
          veg: true,
          feeDetails: {
            restaurantId: "752385",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "319582",
          avgRatingString: "4.2",
          totalRatingsString: "2",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "44 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-04 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-hoysala-nagar-indira-nagar-bangalore-752385",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "131114",
          name: "Andhra Gunpowder",
          cloudinaryImageId: "xnpuvvqfcxfttpwgvq6p",
          locality: "Jeevan Bhima Nagar",
          areaName: "Indiranagar",
          costForTwo: "₹350 for two",
          cuisines: ["Andhra", "Biryani", "South Indian"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "131114",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "10496",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "23 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-05 01:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/andhra-gunpowder-jeevan-bhima-nagar-indiranagar-bangalore-131114",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "271",
          name: "Meghana Foods",
          cloudinaryImageId: "sotxv0gury7f7vrfvb2r",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood",
          ],
          avgRating: 4.4,
          feeDetails: {
            restaurantId: "271",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "635",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-05 01:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/meghana-foods-indiranagar-bangalore-271",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "10584",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Indiranagar",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.6,
          feeDetails: {
            restaurantId: "10584",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "721",
          avgRatingString: "3.6",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 59,
            serviceability: "SERVICEABLE",
            slaString: "59 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-05 04:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/pizza-hut-indiranagar-bangalore-10584",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "23681",
          name: "McDonald's",
          cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
          locality: "Cmh Road",
          areaName: "Indiranagar",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          feeDetails: {
            restaurantId: "23681",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "630",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-05 02:45:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/mcdonalds-cmh-road-indiranagar-bangalore-23681",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "15898",
          name: "Mani's Dum Biryani",
          cloudinaryImageId: "lufqwcvjqllfw24ab82x",
          locality: "Jeevan Bhima Nagar",
          areaName: "Jeevan Bhima Nagar",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani"],
          avgRating: 4.4,
          feeDetails: {
            restaurantId: "15898",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "623",
          avgRatingString: "4.4",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "20 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-04 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/manis-dum-biryani-jeevan-bhima-nagar-bangalore-15898",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "410684",
          name: "Soul Rasa",
          cloudinaryImageId: "vt9jevkq2ddvjodkuhq3",
          locality: "Murugeshpalya",
          areaName: "Indiranagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Indian",
            "Healthy Food",
            "Home Food",
            "South Indian",
            "North Indian",
          ],
          avgRating: 4.4,
          feeDetails: {
            restaurantId: "410684",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3800,
          },
          parentId: "239281",
          avgRatingString: "4.4",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 3.9,
            serviceability: "SERVICEABLE",
            slaString: "27 mins",
            lastMileTravelString: "3.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-04 23:30:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "brand",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/soul-rasa-murugeshpalya-indiranagar-bangalore-410684",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
      {
        info: {
          id: "457308",
          name: "Bakingo",
          cloudinaryImageId: "zf2wklnad7kyvgk98thl",
          locality: "New Thipasandra",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
          avgRating: 4.3,
          feeDetails: {
            restaurantId: "457308",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2800,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2800,
          },
          parentId: "3818",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-05 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: "seo-data-d46ad577-7279-477c-af7f-721ede287580",
        },
        cta: {
          link: "https://www.swiggy.com/restaurants/bakingo-new-thipasandra-indiranagar-bangalore-457308",
          text: "RESTAURANT_MENU",
          type: "WEBLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
      },
    ];
    setTimeout(() => {
      setResC(data);
    }, "1000");
  };
  return { resC };
};

export const sampleData =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
