import { Renderer } from '@unseenco/taxi'
import gsap from 'gsap'

export default class DefaultRenderer extends Renderer {
    onEnter() {
        // run after the new content has been added to the Taxi container
    }

    onEnterCompleted() {
        // run after the transition.onEnter has fully completed
    }

    onLeave() {

    }

    onLeaveCompleted() {

    }
}