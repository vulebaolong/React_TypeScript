import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {  getAllProductMID } from "../../redux/slices/productSlice";
import ItemListShoe from "../../components/ItemListShoe/ItemListShoe";

type Props = {};
function Home({}: Props) {
    const dispatch: DispatchType = useDispatch();
    const { listProduct } = useSelector((state: RootState) => {
        return state.productSlice;
    });

    useEffect(() => {
        dispatch(getAllProductMID());
    }, []);

    const renderListShoe = () => {
        return listProduct.map((shoe) => {
            return <ItemListShoe key={shoe.id} shoe={shoe} />;
        });
    };

    return (
        <div className="container my-5">
            <div
                className=" d-flex flex-column p-3 border rounded-4"
            >
                <h2 className="mb-5">Danh sách sản phẩm</h2>
                <div className="row row-gap-3">{renderListShoe()}</div>
            </div>
        </div>
    );
}
export default Home;
