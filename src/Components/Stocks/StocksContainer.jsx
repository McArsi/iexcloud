import { connect } from 'react-redux';
import { fetchStocks } from '../../store/Stocks/Action';
import Stocks from './Stocks';

const mapStateToProps = (state) => {
    return {
        stocksList: state.stocksList,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStocks: () => dispatch(fetchStocks())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Stocks);