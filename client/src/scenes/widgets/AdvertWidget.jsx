import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;


  return (
    <WidgetWrapper>
        <FlexBetween>
         <div className="Ads">
          <Carousel 
            infiniteLoop={true} 
            autoPlay={true} 
            showArrows={false} 
            showIndicators={false} 
            showThumbs={false} 
            interval={10000} 
            transitionTime={500}
            width={300}>
        <div className="Ad1">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Ad</Typography>
      </FlexBetween>
      <img
        width="70%"
        height="auto"
        alt="advert"
        src="https://famchat.onrender.com/assets/info2.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Smokey's Outdoor and Tackle</Typography>
        <Typography color={medium}>smokeyoutside.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Smokey's annual Spring Yard Fest is back! Save 30% on all of your 
        favorite yard tools and mouse hunting gear
      </Typography>
      </div>
      <div className="Ad2">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://famchat.onrender.com/assets/info3.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Oak City Bourbon</Typography>
        <Typography color={medium}>ocbourbon.com</Typography>
      </FlexBetween>  
      <Typography color={medium} m="0.5rem 0">
        Top shelf selections at bottom shelf prices.
        Visit Oak City Bourbon for your sophisticated taste
      </Typography>
      </div>
      <div className="Ad3">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://famchat.onrender.com/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Bundesliga Mornings</Typography>
        <Typography color={medium}>bunmornings.com</Typography>
      </FlexBetween> 
      <Typography color={medium} m="0.5rem 0">
        Join us live every Saturday to catch up on all Bundesliga action. 
        Highlights from each game and bonus coverage available
      </Typography>
      </div>
      <div className="Ad4">
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://famchat.onrender.com/assets/info1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Brush Queen</Typography>
        <Typography color={medium}>brushqueen.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Same day shipping on over hundreds of styles and brands of makeup brushes!
      </Typography>
      </div>
      </Carousel>
      </div>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AdvertWidget;