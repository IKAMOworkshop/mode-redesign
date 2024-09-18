import { Core } from '@unseenco/taxi'
import DefaultRenderer from './TaxiRenderer'
import ProductTransition from './ProductTransition'
import HomeTransition from './HomeTransition'

const taxi = new Core({
    renderers:{
        default: DefaultRenderer
    },
    transitions:{
        product: ProductTransition,
        home: HomeTransition
    }
})