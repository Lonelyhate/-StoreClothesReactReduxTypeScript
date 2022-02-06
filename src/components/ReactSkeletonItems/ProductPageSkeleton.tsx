import React, { FC } from "react"
import ContentLoader from "react-content-loader"

const ProductPageSkeleton: FC = () => (
  <ContentLoader 
    speed={2}
    width={1050}
    height={600}
    viewBox="0 0 1050 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="170" y="406" rx="0" ry="0" width="1" height="7" /> 
    <rect x="0" y="0" rx="0" ry="0" width="500" height="600" /> 
    <rect x="650" y="110" rx="0" ry="0" width="400" height="20" /> 
    <rect x="650" y="150" rx="0" ry="0" width="50" height="20" /> 
    <rect x="650" y="180" rx="0" ry="0" width="106" height="20" /> 
    <rect x="650" y="230" rx="0" ry="0" width="102" height="20" /> 
    <rect x="650" y="270" rx="0" ry="0" width="400" height="145" />
  </ContentLoader>
)

export default ProductPageSkeleton