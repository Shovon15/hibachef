import ContentContainer from "@/components/layout/container/contentContainer";

const Detail = () => {
  const description = `
<div>
  <p>
    Structured gripped tape invisible moulded cups for support firm hold strong power mesh front firm panel detail. 
    Warmth comfort hang loosely from the body large part at the front full button detail cotton blend cute functional. 
    Bodice ruffles bright primary colours punchy palette selected cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Contemporary 
    punch pink pocket square sophisticated luxurious colour print pocket pattern. On trend empire silhouettes.
  </p>

  <p>
    Striking power studded waistlines silver zip inner drawstring waist channel under edgy single-breasted jacket. 
    Engraved attention to detail elegant with metallic colours sheen quartz leather straps teams with a silk blouse. 
    Grey, blue keen detailing a slicker deluxe aqua visible heels homage to the shoes showcased glamorous shoe. 
    Workwear perfect new crisp cotton poplin shirt dress for work or the weekend. Low scoop back.
  </p>

 <blockquote style="
  position: relative;
  font-family: var(--font-cooperBlack);
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: #E4002B;
  margin: 40px 0;
  padding-left: 60px;
">
  <span style="
    position: absolute;
    left: 0;
    top: 0;
    font-size: 60px;
    color: #D1D5DB;
    font-weight: 900;
    line-height: 1;
  ">
    &ldquo;
  </span>
  Knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.
</blockquote>

  <p>
    Foam padding in the insole leather finish quality staple flat slip-on design pointed toe off-duty shoe. 
    Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. 
    Polished finish elegant court shoe ankle strap chunky midblock heel almond toe flexible rubber.
  </p>

  <p>
    Eget ornare tellus venenatis. Donec odio tempus. Felis erat euismod massa rutrum varius etiam sem eros quis sem neque vel libero. 
    Venenatis nibh fringilla pretium magna aliquam nunc vulputate integer augue ultrices orci. Eget viverra fringilla orci sit amet 
    natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetur commodo condimentum eros.
  </p>

  <div style="display: flex; gap: 16px; margin: 24px 0;">
    <img src="/blog-img-1.png" alt="food1" style="width: 33%; border-radius: 8px;" />
    <img src="/blog-img-1.png" alt="food2" style="width: 33%; border-radius: 8px;" />
    <img src="/blog-img-1.png" alt="food3" style="width: 33%; border-radius: 8px;" />
  </div>

  <h2 style="margin-top: 32px; font-weight: bold;">
    Eu ridiculus fringilla aenean
  </h2>

  <p>
    Socios consequat adipiscing at cubilia dolor eros lectus cras natoque vulputate dolor eget vulputate. 
    Nec varius eros ullamcorper laoreet dapibus nunc ac enim viverra. Aenean ut augue curabitur at porttitor nisl sed enim. 
    Nulla nec quis ut quisque arcu commodo ultricies neque. Lorem eget venenatis dui ante lectus ultricies tellus montes.
  </p>

  <ul>
    <li>Crisp fresh iconic elegant timeless clean perfumes</li>
    <li>Neck straight sharp silhouette and dart detail</li>
    <li>Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
  </ul>

  <p>
    See through delicate embroidered organza blue lining luxury acetate-rich stretch pleat detailing. 
    Leather detail shoulder contrast colour contour stitching silhouette working peplum. Statement buttons cover-up 
    tweaks patch pockets perennial lapel collar flap chest pockets tobacco stitching cropped jacket. Effortless comfortable 
    full leather lining asymmetric angled strap slip-on heel with classic design.
  </p>

  <div style="margin-top: 24px;">
    <img src="/blog-img-2.png" alt="party" style="width: 100%; " />
  </div>

  <p>
    See through delicate embroidered organza blue lining luxury acetate-rich stretch pleat detailing. 
    Leather detail shoulder contrast colour contour stitching silhouette working peplum. Statement buttons cover-up 
    tweaks patch pockets perennial lapel collar flap chest pockets tobacco stitching cropped jacket. Effortless comfortable 
    full leather lining asymmetric angled strap slip-on heel with classic design.
  </p>
</div>
`;
  return (
    <ContentContainer className="grid grid-cols-3 pt-10 pb-[140px] gap-18">
      <div className="col-span-2 blog-detail-content">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="col-span-1">
        <h3 className="font-cooperBlack text-2xl text-[#121416] mb-4">The Latest</h3>
        <div>
            <div className="bg-[#F2F2F2] rounded-lg p-5">
                <p className="text-[#000000] text-base font-medium font-graphikTrial">10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships</p>
                <div className=" flex justify-between items-center mt-3 font-graphikTrial text-base text-[#6C757D]">
                    <p>June 21,2022</p>
                    <span></span>
                    <p>2 minute read</p>
                </div>
            </div>
        </div>
      </div>
    </ContentContainer>
  );
};
export default Detail;
