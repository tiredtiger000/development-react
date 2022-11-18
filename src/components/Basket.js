import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Checkbox, Divider, Row} from 'antd';

export default function Basket({foodData, updateFoodList}) {
    const [sort, setSort] = useState("popular")
    const [filters, setFilters] = useState([])

    useEffect(() => {
        const filtered = filterElements(filters)
        sortElements(filtered)
    }, [sort, filters])

    function sortElements(elements) {
        if (sort === "popular") {
            const updatedList = elements.sort((a,b) => a.popular - b.popular)
            updateFoodList(updatedList)
        }
        else if (sort === "price") {
            const updatedList = elements.sort((a,b) => a.price - b.price)
            updateFoodList(updatedList)
        }
    }

    function filterElements(ele) {
        // console.log("ele", ele)
        if(ele.includes("Noodles") && ele.includes("Vegetarian")) {
            let updatedList = foodData.filter(x => x.noodle === true)
            return updatedList.filter(x => x.vegetarian === true)
        }
        else if(ele.includes("Noodles")) {
            return foodData.filter(x => x.noodle === true)
        }
        else if(ele.includes("Vegetarian")) {
            return foodData.filter(x => x.vegetarian === true)
        }
        else {
            return foodData
        }
    }

    return (
        <>
        <Divider></Divider>
        <h4>Sort by</h4>
        <Select defaultValue="Popularity"
            style={{width: 220,}}
            bordered={true}
            onChange={(value) => setSort(value)}
            options={[
            {
            value: 'popular',
            label: 'Popularity',
            },
            {
            value: 'price',
            label: 'Price',
            },
            ]}
        />
        <Divider></Divider>
        <h4>Filter by</h4>
        <Checkbox.Group onChange={(value) => setFilters(value)}>
            <Row>
                <Checkbox defaultChecked={false} value='Vegetarian'>Vegetarian</Checkbox>
            </Row>
            <Row>
                <Checkbox defaultChecked={false}  value='Noodles'>Noodles</Checkbox>
            </Row>
        </Checkbox.Group>
        <Divider></Divider>
        </>
    )
}