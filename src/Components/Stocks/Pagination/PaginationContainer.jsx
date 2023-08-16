import { connect } from 'react-redux';
import Pagination from './Pagination';


const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Pagination);