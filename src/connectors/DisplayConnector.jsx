import IOCommonDisplayComponent from '../components/IOCommonDisplay';
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    console.log(`mapStateToProps : store - ${store} input.PrintStack : ${store.input.printStack()}, output: ${store.output}`)

    return {
        input : store.input.printStack(),
        output : store.output
    }
}

const DisplayConnector = connect(mapStateToProps)(IOCommonDisplayComponent);

export default DisplayConnector;