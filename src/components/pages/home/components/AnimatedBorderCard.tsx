import "./animatedBorderCard.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedBorderCard = () => {
  return (
    <>
      <div className="w-[550px] h-[550px] animLine p-5 rounded-[40px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          labore esse accusamus cumque. Consectetur nisi incidunt perspiciatis
          ab nihil ducimus labore sed ut cupiditate, quae quasi commodi eligendi
          aperiam quis amet? Iusto tempora dignissimos quam labore, quae,
          deleniti est magni, corporis repellendus soluta maiores aperiam cumque
          laboriosam dolore. Corporis ipsam praesentium sapiente voluptatem
          placeat, odit vitae provident excepturi fuga rem! Beatae eveniet hic
          incidunt rerum laborum temporibus voluptatum quasi voluptas tenetur
          expedita illum tempora consequuntur pariatur reprehenderit
          exercitationem, odit aut neque distinctio corporis modi voluptatem
          voluptates rem. Accusamus quo doloremque natus officia enim voluptatum
          id! Fugiat et, ex distinctio, sit eveniet quibusdam ipsa omnis
          ratione, nesciunt cumque autem nisi inventore impedit debitis nostrum
          minima in dolor? Voluptas provident aut doloremque ipsa vel, magnam
          exercitationem earum error quidem minima. Reprehenderit quasi fugit
          repudiandae non facilis eligendi sit assumenda cumque doloremque
          placeat labore odit ab maiores praesentium eum dolor architecto
          molestiae, velit harum perferendis incidunt. Quisquam pariatur odit
          dolor hic excepturi velit vitae, temporibus ipsum dicta maiores
          corporis error sint enim asperiores id sunt consequuntur laudantium.
          Molestiae, incidunt eum? Sunt harum omnis alias?
        </p>
      </div>

      {/* <div className="box animLine" /> */}
    </>

    // <div className={`animLine relative rounded-[10px] ${className}`}>
    //   <div className="w-full h-full rounded-[10px] bg-transparent">
    //     {children}
    //   </div>
    // </div>
  );
};

export default AnimatedBorderCard;
