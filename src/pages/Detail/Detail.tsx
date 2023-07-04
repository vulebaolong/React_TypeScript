import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailModel, getOneProductMID } from "../../redux/slices/productSlice";
import { DispatchType, RootState } from "../../redux/store";
import ItemListShoe from "../../components/ItemListShoe/ItemListShoe";

type Props = {};
function Detail({}: Props) {
    const params = useParams();
    const id: string | undefined = params.id;
    const dispatch: DispatchType = useDispatch();
    const productDetail: ProductDetailModel | null = useSelector(
        (state: RootState) => state.productSlice.productDetail
    );

    const renderListShoe = () => {
      return productDetail?.relatedProducts.map((shoe) => {
          return <ItemListShoe key={shoe.id} shoe={shoe} />;
      });
  };

    useEffect(() => {
        dispatch(getOneProductMID(id as string));
    }, [id]);

    return (
        <div className="container">
            <div className="row p-3 border rounded-4 my-5">
                <div className="col-5">
                    <img src={productDetail?.image} alt="" />
                </div>
                <div className="col-7">
                    <h3 className="">{productDetail?.name}</h3>
                    <p>{productDetail?.description}</p>
                </div>
            </div>
            <div className="row p-5 border rounded-4 my-5">
              <h3 className="mb-5">Realate Product</h3>
              {renderListShoe()}
            </div>
        </div>
    );
}
export default Detail;
