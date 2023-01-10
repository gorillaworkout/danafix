import React, { useEffect, useState, useRef } from "react";
import imageArticle from "../Asset/IMG_3101.jpg";
import "../Style/Article.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GetAllProduct } from "../Redux/Actions/ProductActions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
import InfiniteScroll from 'react-infinite-scroller'
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useWindowScrollPositions } from '../services/useWindowScrollPosition'


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Article() {
  const listInnerRef = useRef();
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  const [allProduct,setAllProduct] = useState([]) //all article from API
  const [keyStart, setKeyStart] = useState(0); // keystart to find start index for slicing product
  const [maxKey,setMaxKey] = useState(6); // total key = total article / 5 per render
  const [isLoading,setIsLoading] = useState(true)
  const { scrollX, scrollY } = useWindowScrollPositions()
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  console.log(windowDimenion,' window dimension')

  useEffect(()=>{
    console.log(scrollY,windowDimensions.height)
    if(scrollY > windowDimensions.height-200){
      console.log('end of bottom')
      setKeyStart(keyStart+1)
      dataToRender()
    }

  },[scrollY])

  /* This will trigger handleOnDocumentBottom when the body of the page hits the bottom */

  const dataToRender=()=>{
    
    let dataRender = []
    if(!isLoading){
      console.log('data to render running')
      if(Product.allProduct?.posts){
        Product.allProduct.posts.forEach((val,index)=>{
          let maxItemToRender = keyStart * maxKey
          if(index < maxItemToRender){
            dataRender.push(val)
          }
        })
        setAllProduct(dataRender)
        console.log(allProduct,' all product')
  
        if(dataRender.length===0) {
          setHasMoreItems(false);
        } else {
          setHasMoreItems(true);
        }
      }
    }
  }

  useEffect(()=>{
    setKeyStart(1)
    let findMaxkey = 6
    setMaxKey(findMaxkey)
    dataToRender()
    // findBottom()
  },[])
  useEffect(()=>{
    console.log('did update jalan')
    dataToRender()
    if(!Product?.isLoadingProduct){
      setIsLoading(Product.isLoadingProduct)
    }
  },[Product])


  const renderArticle = () => {
    if (Product.isLoadingProduct) {
      const totalItems = 4;
      const items = new Array(totalItems).fill(null);
      return items.map((val,index) => {
        return (
          <div className="card-article" key={index}>
            <Skeleton
              style={{
                border: "1px solid #ccc",
                display: "block",
                lineHeight: 2,
                padding: "1rem",
                marginBottom: "0.5rem",
                width: 250,
                height: 180,
              }}
            />
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <Skeleton />
                </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">
                  <Skeleton />
                </p>
                <Skeleton />
              </div>
            </div>
          </div>
        );
      });
    } else {
      if(allProduct){
        return allProduct.map((val, index) => {
            return (
              <div className="card-article" key={index+1}>
                <img src={val.featured_image.source} alt="" />
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{val.seo.title}</h5>
                    <p className="card-text">{val.seo.description}</p>
                    <div className="author-card">
                      <img src={val.author.avatar_url} alt="" id="img-author" />
                      <p>{val.author.display_name}</p>
                      <p>20h Ago</p>
                      <p>{val.read_time} min read</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          
        });

      }
    }
  };

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
    }
 }
  return (
    <>
      <div id="article-box" className="d-flex flex-column col-12" onScroll={handleScroll} ref={listInnerRef}>
        <h3>Lates Stories</h3>
          {renderArticle()}
      </div>
    </>
  );
}
