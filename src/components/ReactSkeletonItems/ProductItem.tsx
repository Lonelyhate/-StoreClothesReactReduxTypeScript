import React, { FC } from "react"
import ContentLoader from "react-content-loader"

const ProductItemSkeleton:FC = () => (
  <ContentLoader 
    speed={2}
    width={246}
    height={449}
    viewBox="0 0 246 449"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="170" y="406" rx="0" ry="0" width="1" height="7" /> 
    <rect x="0" y="0" rx="0" ry="0" width="246" height="330" /> 
    <rect x="8" y="355" rx="0" ry="0" width="230" height="16" /> 
    <rect x="60" y="380" rx="0" ry="0" width="120" height="18" /> 
    <rect x="0" y="413" rx="18" ry="18" width="246" height="35" />
  </ContentLoader>
)

export default ProductItemSkeleton