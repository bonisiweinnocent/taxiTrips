const { Pool } = require("pg")

module.exports = function TaxiTrips(Pool) {

    async function findAllRegions() {
        var findAll = await Pool.query('SELECT * FROM region');
        return findAll.rows

    }
    async function totalTripCount() {
        let taxitrips = await Pool.query('SELECT count(id) from trip');
        return taxitrips.length

    }



    async function findRegion(name) {
        let get = await Pool.query('SELECT FROM region where city_name =$1', [name]);
        return get.rows
    }
    async function findTaxisForRegion(city) {
        var findForRegion = await Pool.query('SELECT  FROM region  join taxi on taxi.region_id = region.id WHERE city_name =$1', [city]);
        return findForRegion.rows
    }

    async function getRegNum() {
        let reg = await Pool.query('SELECT reg_number FROM taxi RIGHT JOIN trip ON taxi_id = trip.taxi_id');
        return reg.rows
    }

    async function findTripsByRegNumber() {

        let findtrip = ('select * from trip');
        return findtrip.rows;
    }


    async function findIncomeByRegNumber(reg) {
        let income = await Pool.query('select sum(fare) as total from route join trip on route_id = trip.id where route_id =$1', [reg]);


        return income.rows

    }

    async function findTotalIncomePerTaxi() {


    }
    async function findTotalIncome() {
        let getTotal = await Pool.query('SELECT * FROM trip sum(fare)');
        return getTotal.rows
    }



    // async function getForeignKey(name) {

    //     let value = await Pool.query('SELECT id FROM region WHERE city_name = $1', [name]);

    //     return value.rows[0].id
    // }





    return {
        findAllRegions,
        totalTripCount,
        findTaxisForRegion,
        findRegion, getRegNum,
        findTripsByRegNumber,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome
    }
}