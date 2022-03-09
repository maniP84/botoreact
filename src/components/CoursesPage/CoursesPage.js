import React,{useState, useRef, useEffect, useContext} from 'react';

import Course from '../Course';

//style
import styles from "./CoursesPage.module.css"

//context
import { ProductsContext } from "../../context/ProductContextProvider"


const CoursesPage = () => {
    const h3 = useRef()
    const ul = useRef()
    const icon = useRef()
    const selectFilter = useRef()
    
    const productsContext = useContext(ProductsContext)
    const [products, setProducts] = useState(productsContext)

    const [viseble, setViseble] = useState(true)


    const [inputFilter, setInputFilter] = useState("")
    const [searchInput, setSearchInput] = useState("")
    
    const [sortedProducts, setSortedProducts] = useState(JSON.parse(JSON.stringify(products)))
    const [expensive, setExpensive] = useState(JSON.parse(JSON.stringify(products)))
    
    const [showProduct, setShowProduct] = useState()
    const [mapProducts, setMapPrpducts] = useState(sortedProducts)
    // const sortedProducts = JSON.parse(JSON.stringify(products))

    const defaultProducts = (event) => {
        setMapPrpducts(products)
        h3.current.innerText = event.target.innerText
        ul.current.style.opacity = "0"
        ul.current.style.pointerEvents ="none"
        icon.current.style.transform = "rotate(0deg)"
        setViseble(true)
    }
    
    
    const mostCheapest = (event) => {
        setMapPrpducts(sortedProducts)
        setShowProduct(sortedProducts.sort((a, b) => {
            return a.value - b.value;
        }))
        ul.current.style.opacity = "0"
        ul.current.style.pointerEvents ="none"
        icon.current.style.transform = "rotate(0deg)"
        setViseble(true)
        ul.current.style.width = h3.current.offsetWidth
        h3.current.innerText = event.target.innerText
    }
    const byStudents = (event) => {
            h3.current.innerText = event.target.innerText
            ul.current.style.opacity = "0"
            ul.current.style.pointerEvents ="none"
            icon.current.style.transform = "rotate(0deg)"
            ul.current.style.width = h3.current.offsetWidth

            setViseble(true)
        }
        
    const mostExpensive = (event) => {
        setMapPrpducts(expensive)
        setProducts(expensive.sort((a, b) => {
            return b.value - a.value;
        }))
        ul.current.style.width = h3.current.offsetWidth
        console.log(parseInt(products[0].students))
        ul.current.style.opacity = "0"
        ul.current.style.pointerEvents ="none"
        icon.current.style.transform = "rotate(0deg)"
        setViseble(true)
        h3.current.innerText = event.target.innerText
}

    const [filters, setFilters] = useState([{name:"مرتب سازی پیش فرض", event:defaultProducts},
        {name:"مرتب سازی بر اساس محبوبیت", event: byStudents},
        {name:"مرتب سازی بر اساس ارزان ترین", event: mostCheapest},
        {name:"مرتب سازی بر اساس گران ترین", event: mostExpensive} ])


    const filterHandler = (event) => {
        setInputFilter(event.target.value)
    }    

    const searchHandler = (event) => {
        setSearchInput(event.target.value)
    }

console.log(products[0].about)

    const visebleHandler = (event) => {
        if(viseble) {
            ul.current.style.opacity = "1"
            ul.current.style.pointerEvents ="all"
            icon.current.style.transform = "rotate(180deg)"
            setViseble(false)
        }
        if(!viseble) {
            ul.current.style.opacity = "0"
            ul.current.style.pointerEvents ="none"
            icon.current.style.transform = "rotate(0deg)"
            selectFilter.current.style.borderRadius="200px"
            setViseble(true)
        }
    }

    const filterFinder = filters.filter(filter => filter.name.includes(inputFilter))
    const searchCourse = mapProducts.filter(filter => filter.name.includes(searchInput))
    console.log(products[4].chapters.one)
    console.log(Math.floor(Math.random() * 2) + 1)

    return (
        <div className={styles.container}>
            <div className={styles.centerDiv}>
                <div className={styles.filtersContainer}>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder='جستجوی دوره...' value={searchInput} onChange={searchHandler}/>
                        <i class="fal fa-search"></i>
                    </div>
                    <div className={styles.filters}>
                        <div ref={selectFilter} className={styles.selectFilter}>
                            <i ref={icon} class="fas fa-sort-down"></i>
                            <h3 ref={h3} onClick={visebleHandler}>مرتب سازی پیش فرض</h3>
                        </div>
                        <div className={styles.opacityContainer} ref={ul}>
                            <div className={styles.filterInputContainer}>
                                <input type="text" value={inputFilter} onChange={filterHandler}/>
                            </div>
                            <ul ref={ul}>
                                {filterFinder.map(filter => <li key={filter.name} onClick={filter.event}>{filter.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <div className={styles.courseContainer}>
                    {searchCourse.map(product => <Course image={product.image} key={product.url} name={product.name}url={product.url} students={product.students} price={product.price}/>)}
                </div>
                <div>
                    {/* <h1>{products[5].chapters.one[0].title}</h1> */}
                    {/* {products[0].chapters.one.map(proset => <div><p>{proset.episode}</p><h3>{proset.name}</h3>{proset.free ? <button>yesssss</button> : <p>no ofpsodfjpsdr</p>}</div>)} */}
                </div>
        </div>
    );
};

export default CoursesPage;
{/* <i class="fal fa-list"></i> */}