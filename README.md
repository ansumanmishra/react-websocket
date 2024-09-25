# Securities-Case

Build this project by;

    $ mvn clean install
	$ cd securities-case-web
	$ mvn spring-boot:run

## Main subprojects

### securities-case-service

`securities-case-services` implements the services for this application and contains its domain model.
The domain model is simple. There is an Instrument class and a Price class. An instrument has a code and price.
A price has a timestamp and an amount. The services module contains the `InstrumentService` (spring component) which can be used to retrieve all instruments with their latest prices. It is also possible to register a InstrumentListener which will callback in case a price of an instrument is updated.
To simulate real instrument price updates a spring scheduler is used which randomly updates prices every second and triggers the callback.


### securities-case-web

`securities-case-web` implements a REST API to retrieve the instrument list `/instruments` and contains a websocket to retrieve updates of instrument prices.

The `webapp` folder contains a minimal client implementation to connect with the web socket as an example.
