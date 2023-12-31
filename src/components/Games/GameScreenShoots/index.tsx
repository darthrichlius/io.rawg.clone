import { useGameScreenShoots } from "@/hooks";
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { MouseEvent } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Keyboard, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  slug: string;
}

const GameScreenShoots = ({ slug }: Props) => {
  const { images, loading, error } = useGameScreenShoots(slug);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const imageInDetails = (e: MouseEvent) => {
    e.preventDefault();
    onOpen();
  };

  if (loading) return <Spinner />;

  if (error) throw error;

  if (!images) return <p>No Screenshot</p>;

  return (
    <Box>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={8}
      >
        {images.map((s) => (
          <Image
            key={s.id}
            src={s.image}
            _hover={{
              cursor: "pointer",
            }}
            onClick={imageInDetails}
          />
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader />
          <ModalBody>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, FreeMode, Navigation, Pagination]}
              className="mySwiper"
            >
              {images.map((s) => (
                <SwiperSlide key={s.id}>
                  <Image
                    src={s.image}
                    _hover={{
                      cursor: "pointer",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GameScreenShoots;
