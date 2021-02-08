import { gql, DocumentNode } from 'apollo-boost';

export const GET_PRODUCT_BY_ID = (id: string): DocumentNode => gql`
  {
    getMeliProductDetailsById(id: "MLA859932726") {
      id
      site_id
      title
      subtitle
      seller_id
      category_id
      official_store_id
      price
      base_price
      original_price
      currency_id
      initial_quantity
      sold_quantity
      sale_terms {
        id
        name
        value_id
        value_name
        value_struct {
          number
          unit
        }
      }
      buying_mode
      listing_type_id
      start_time
      stop_time
      condition
      permalink
      thumbnail
      secure_thumbnail
      pictures {
        id
        url
        secure_url
        size
        max_size
        quality
      }
      video_id
      descriptions {
        id
        created
        plain_text
      }
      accepts_mercadopago
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
      internacional_delivery_mode
      seller_address {
        city {
          id
          name
        }
        state {
          id
          name
        }
        country {
          id
          name
        }
        search_location {
          neighborhood {
            id
            name
          }
          city {
            id
            name
          }
          state {
            id
            name
          }
        }
        latitude
        longitud
        id
      }
      geolocation {
        latitude
        longitude
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
      tags
      warranty
      variations {
        id
        price
        attribute_combinations {
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
        available_quantity
        sol_quantity
        sale_terms
        picture_ids
        catalog_product_id
      }
      catalog_product_id
      domain_id
      parent_item_id
      differential_pricing
      deal_ids
      automatic_relist
      date_created
      last_updated
      health
      catalog_listing
    }
  }
`;
