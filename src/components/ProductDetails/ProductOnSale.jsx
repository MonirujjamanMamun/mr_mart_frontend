import {
  spfBlueIphone,
  spfRedIphone,
  spfSpeaker,
  spfTablets,
} from '../../assets/allImg';

const ProductOnSale = () => {
  const specialOffer = [
    {
      _id: '201',
      img: spfSpeaker,
      productName: 'Speaker',
      price: '35.00',
      color: 'Blank and White',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: '202',
      img: spfTablets,
      productName: 'Tablets',
      price: '180.00',
      color: 'Black',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: '203',
      img: spfBlueIphone,
      productName: 'Iphone',
      price: '250.00',
      color: 'Blue',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
    {
      _id: '204',
      img: spfRedIphone,
      productName: 'Iphone',
      price: '220.00',
      color: 'Red',
      badge: true,
      des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.',
    },
  ];
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2">
        {specialOffer.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item.img} alt={item.img} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOnSale;
