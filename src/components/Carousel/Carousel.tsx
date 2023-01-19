import { View, FlatList, Image, useWindowDimensions } from 'react-native'

interface ICarousel {
  images: string[];
}

const Carousel = ({ images }: ICarousel) => {

  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (<Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        pagingEnabled
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
        <View style={{
          width: 10,
          aspectRatio: 1,
          borderRadius: 5,
          backgroundColor: 'teal',
        }}
        />
        <View style={{
          width: 10,
          aspectRatio: 1,
          borderRadius: 5,
          backgroundColor: 'teal',
        }}
        />
      </View>
    </View>
  );
};

export default Carousel;