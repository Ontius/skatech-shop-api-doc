import { createEndpointGroup } from "../../utils";

// General data
import * as GetUserDetails from "./get-user-details";
import * as GetUserCart from "./get-user-cart";
import * as GetUserFavoriteProducts from "./get-user-favorite-products";
import * as GetCategories from "./get-categories";
import * as GetBrands from "./get-brands";

// Category listing
import * as GetCategoryProducts from "./get-category-products";
import * as GetCategoryFilters from "./get-category-filters";
import * as GetCategoryTopSellers from "./get-category-top-sellers";

// Search
import * as GetSearchLiveResult from "./get-search-live-result";
import * as GetSearchProducts from "./get-search-products";
import * as GetSearchFilters from "./get-search-filters";

// Brand listing
import * as GetBrandProducts from "./get-brand-products";
import * as GetBrandFilters from "./get-brand-filters";

// Product stream
import * as GetProductStreamProducts from "./get-product-stream-products";
import * as GetProductStreamFilters from "./get-product-stream-filters";

// Product details
import * as GetProductDetails from "./get-product-details";
import * as GetSimilarProducts from "./get-similar-products";
import * as GetCategoryBlueprint from "./get-category-blueprint";
import * as GetCategoryConfigurators from "./get-category-configurators";
import * as GetRecentlyViewedProducts from "./get-recently-viewed-products";
import * as PostAddRecentlyViewedProduct from "./post-add-recently-viewed-product";

// Customer account
import * as PostLoginUser from "./post-login-user";
import * as PostLogoutUser from "./post-logout-user";
import * as PostCreateUser from "./post-create-user";
import * as PutUpdateUser from "./put-update-user";
import * as GetUserOrders from "./get-user-orders";
import * as GetUserAddresses from "./get-user-addresses";
import * as PostCreateUserAddress from "./post-create-user-address";
import * as PutUpdateUserAddress from "./put-update-user-address";
import * as DeleteUserAddress from "./delete-user-address";
import * as GetPaymentMethods from "./get-payment-methods";
import * as GetShippingMethods from "./get-shipping-methods";
import * as PostResetPassword from "./post-reset-password";

// Product configurator
import * as GetConfiguratorDetails from "./get-configurator-details";
import * as PostAddConfiguratorToCart from "./post-add-configurator-to-cart";
import * as DeleteClearConfigurator from "./delete-clear-configurator";
import * as PostAddProductToConfigurator from "./post-add-product-to-configurator";
import * as DeleteRemoveProductFromConfigurator from "./delete-remove-product-from-configurator";

// Cart
import * as PostAddProductToCart from "./post-add-product-to-cart";
import * as PostAddVoucherToCart from "./post-add-voucher-to-cart";
import * as PutUpdateProductInCart from "./put-update-product-in-cart";
import * as DeleteItemFromCart from "./delete-item-from-cart";

// Checkout
import * as PostPerformCheckout from "./post-perform-checkout";

export {
  // General data
  GetUserCart,
  GetUserDetails,
  GetUserFavoriteProducts,
  GetCategories,
  GetBrands,
  // Category listing
  GetCategoryProducts,
  GetCategoryFilters,
  GetCategoryTopSellers,
  // Search
  GetSearchLiveResult,
  GetSearchProducts,
  GetSearchFilters,
  // Brand listing
  GetBrandProducts,
  GetBrandFilters,
  // Product stream
  GetProductStreamProducts,
  GetProductStreamFilters,
  // Product details
  GetProductDetails,
  GetSimilarProducts,
  GetCategoryBlueprint,
  GetCategoryConfigurators,
  GetRecentlyViewedProducts,
  PostAddRecentlyViewedProduct,
  // Customer account
  PostLoginUser,
  PostLogoutUser,
  PostCreateUser,
  PutUpdateUser,
  GetUserOrders,
  GetUserAddresses,
  PostCreateUserAddress,
  PutUpdateUserAddress,
  DeleteUserAddress,
  GetPaymentMethods,
  GetShippingMethods,
  PostResetPassword,
  // Product configurator
  GetConfiguratorDetails,
  PostAddConfiguratorToCart,
  DeleteClearConfigurator,
  PostAddProductToConfigurator,
  DeleteRemoveProductFromConfigurator,
  // Cart
  PostAddProductToCart,
  PostAddVoucherToCart,
  PutUpdateProductInCart,
  DeleteItemFromCart,
  // Checkout
  PostPerformCheckout
};

export default [
  createEndpointGroup("Allgemeine Daten", [
    GetUserDetails,
    GetUserCart,
    GetUserFavoriteProducts,
    GetCategories,
    GetBrands
  ]),
  createEndpointGroup("Kategorie Listing", [
    GetCategoryProducts,
    GetCategoryFilters,
    GetCategoryTopSellers
  ]),
  createEndpointGroup("Suche", [
    GetSearchLiveResult,
    GetSearchProducts,
    GetSearchFilters
  ]),
  createEndpointGroup("Brand Listing", [GetBrandProducts, GetBrandFilters]),
  createEndpointGroup("Product Stream", [
    GetProductStreamProducts,
    GetProductStreamFilters
  ]),
  createEndpointGroup("Produkt Detail Seite", [
    GetProductDetails,
    GetSimilarProducts,
    GetCategoryBlueprint,
    GetCategoryConfigurators,
    GetRecentlyViewedProducts,
    PostAddRecentlyViewedProduct
  ]),
  createEndpointGroup("Kunden Konto", [
    PostLoginUser,
    PostLogoutUser,
    PostCreateUser,
    PutUpdateUser,
    GetUserOrders,
    GetUserAddresses,
    PostCreateUserAddress,
    PutUpdateUserAddress,
    DeleteUserAddress,
    GetPaymentMethods,
    GetShippingMethods,
    PostResetPassword
  ]),
  createEndpointGroup("Produkt Konfigurator", [
    GetConfiguratorDetails,
    PostAddConfiguratorToCart,
    DeleteClearConfigurator,
    PostAddProductToConfigurator,
    DeleteRemoveProductFromConfigurator
  ]),
  createEndpointGroup("Warenkorb", [
    PostAddProductToCart,
    PostAddVoucherToCart,
    PutUpdateProductInCart,
    DeleteItemFromCart
  ]),
  createEndpointGroup("Checkout", [PostPerformCheckout])
];
