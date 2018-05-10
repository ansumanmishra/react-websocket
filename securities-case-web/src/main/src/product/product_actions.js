const Stomp = require('webstomp-client');
const SockJS = require('sockjs-client');

const productServiceURL = 'http://localhost:8080/instruments';
const webSocketURL = 'http://localhost:8080/stomp';

/* Getting the products */
export function getProducts() {
    return (dispatch) => {
        fetch(productServiceURL)
        .then(response => response.json())
        .then(json => dispatch(resolvedGetProducts(json)))
    }
}

function resolvedGetProducts(data) {
	return {
		type: 'RESOLVED_GET_PRODUCTS',
		data: data
	} 
}

/* Getting the updated price */
export function getUpdatedPrice() {
	const socket = new SockJS(webSocketURL);
    const stompClient = Stomp.over(socket);

    return (dispatch) => {
    	stompClient.connect({ }, function(frame) {
	        stompClient.subscribe('/topic/update', function(data) {
	        	dispatch(resolvedUpdatedPrice(JSON.parse(data.body)))
	        });
	    });
	}
}

function resolvedUpdatedPrice(data) {
	return {
		type: 'RESOLVED_GET_UPDATED_PRICE',
		data: data
	} 
} 