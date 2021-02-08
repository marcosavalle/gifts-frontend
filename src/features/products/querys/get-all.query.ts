import { gql, DocumentNode } from 'apollo-boost';

export const GET_MELI_PRODUCTS = (): DocumentNode => gql`
  query getAllMeliProducts(
    $site: String
    $filters: [FilterInput]
    $maxAmount: Float!
    $page: Int
  ) {
    getAllMeliProducts(
      input: {
        site: $site
        filters: $filters
        maxAmount: $maxAmount
        page: $page
      }
    ) {
      site_id
      totalPages
      actualPage
      query
      paging {
        total
        offset
        limit
        primary_results
      }
      sort {
        id
        name
      }
      available_sorts {
        id
        name
      }
      filters {
        id
        name
        type
        values {
          id
          name
          path_from_root {
            id
            name
          }
          results
        }
      }
      available_filters {
        id
        name
        type
        values {
          id
          name
          path_from_root {
            id
            name
          }
          results
        }
      }
      results {
        id
        site_id
        title
        price
        currency_id
        available_quantity
        sold_quantity
        buying_mode
        listing_type_id
        stop_time
        condition
        permalink
        thumbnail
        accepts_mercadopago
        installments {
          quantity
          amount
          rate
          currency_id
        }
        address {
          state_id
          state_name
          city_id
          city_name
        }
        shipping {
          mode
          tags
          free_methods {
            id
            rule {
              free_mode
              free_shipping_flag
            }
          }
          dimensions
          free_shipping
          local_pick_up
          logistic_type
          store_pick_up
        }
        attributes {
          id
          name
          values {
            id
            name
            struct {
              number
              unit
            }
            source
          }
          source
          value_id
          value_name
          value_struct {
            number
            unit
          }
          attribute_group_id
          attribute_group_name
        }
        original_price
        category_id
        official_store_id
        catalog_product_id
        tags
        catalog_listing
      }
    }
  }
`;
