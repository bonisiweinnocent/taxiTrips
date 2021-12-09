let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://bonisiwecukatha:pg123@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    beforeEach(async function () {
        console.log('***results***');
        // await pool.query("delete from taxi");
        // await pool.query("delete from region");
        // await pool.query("delete from trip");
        // await pool.query("delete from route");


    });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool)

        
        assert.equal([], await taxiTrips.totalTripCount());


    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{ "city_name": "Durban", "id": 1 }, { "city_name": "Cape Town", "id": 2 }, { "city_name": "Gauteng", "id": 3 }], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);
        await taxiTrips.findRegion('Gauteng')
        console.log('ccccccccccccccc' + JSON.stringify(await taxiTrips.findRegion('Gauteng')));
        console.log('aaaaaaaaaaaaaa' + JSON.stringify(await taxiTrips.findTaxisForRegion('Gauteng')));
        assert.deepStrictEqual([], await taxiTrips.findTaxisForRegion('Gauteng'));
        // assert.deepStrictEqual([],await taxiTrips.findTaxisForRegion('Cape Town'));
        // assert.deepStrictEqual([],await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        await taxiTrips.getRegNum()
        console.log(await taxiTrips.getRegNum() + 'mmmmmmmm');
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber(regNum));
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('***'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
        assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);


        // await taxiTrips.getRegNum()

        assert.equal(0, await taxiTrips.findIncomeByRegNumber(20));
        // assert.deepStrictEqual(0,await taxiTrips.findIncomeByRegNumber('***').length);

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        await taxiTrips.totalTripCount()
        assert.deepStrictEqual([{}, {}, {}],await taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        await taxiTrips.totalTripCount
       

        assert.equal(0, await taxiTrips.findTotalIncome());
    });


    after(function () {
        pool.end();
    });

});