export class InMemoryDataService {
  createDb() {
    let countries = [
      { id: 1, code: 'AD', name: 'Andorra', currencyCode: 'EUR', geonameId: 3041565 },
      { id: 2, code: 'AE', name: 'United Arab Emirates', currencyCode: 'AED', geonameId: 290557 },
      { id: 3, code: 'AF', name: 'Afghanistan', currencyCode: 'AFN', geonameId: 1149361 },
      { id: 4, code: 'AG', name: 'Antigua and Barbuda', currencyCode: 'XCD', geonameId: 3576396 },
      { id: 5, code: 'AI', name: 'Anguilla', currencyCode: 'XCD', geonameId: 3573511 },
      { id: 6, code: 'AL', name: 'Albania', currencyCode: 'ALL', geonameId: 783754 },
      { id: 7, code: 'AM', name: 'Armenia', currencyCode: 'AMD', geonameId: 174982 },
      { id: 8, code: 'AO', name: 'Angola', currencyCode: 'AOA', geonameId: 3351879 },
      { id: 9, code: 'AQ', name: 'Antarctica', currencyCode: '', geonameId: 6697173 },
      { id: 10, code: 'AR', name: 'Argentina', currencyCode: 'ARS', geonameId: 3865483 },
      { id: 11, code: 'AS', name: 'American Samoa', currencyCode: 'USD', geonameId: 5880801 },
      { id: 12, code: 'AT', name: 'Austria', currencyCode: 'EUR', geonameId: 2782113 },
      { id: 13, code: 'AU', name: 'Australia', currencyCode: 'AUD', geonameId: 2077456 },
      { id: 14, code: 'AW', name: 'Aruba', currencyCode: 'AWG', geonameId: 3577279 },
      { id: 15, code: 'AX', name: 'Åland', currencyCode: 'EUR', geonameId: 661882 },
      { id: 16, code: 'AZ', name: 'Azerbaijan', currencyCode: 'AZN', geonameId: 587116 },
      { id: 17, code:'BA', name: 'Bosnia and Herzegovina', currencyCode: 'BAM', geonameId: 3277605 },
      { id: 18, code:'BB', name: 'Barbados', currencyCode: 'BBD', geonameId: 3374084 },
      { id: 19, code:'BD', name: 'Bangladesh', currencyCode: 'BDT', geonameId: 1210997 },
      { id: 20, code:'BE', name: 'Belgium', currencyCode: 'EUR', geonameId: 2802361 },
      { id: 21, code:'BF', name: 'Burkina Faso', currencyCode: 'XOF', geonameId: 2361809 },
      { id: 22, code:'BG', name: 'Bulgaria', currencyCode: 'BGN', geonameId: 732800 },
      { id: 23, code:'BH', name: 'Bahrain', currencyCode: 'BHD', geonameId: 290291 },
      { id: 24, code:'BI', name: 'Burundi', currencyCode: 'BIF', geonameId: 433561 },
      { id: 25, code:'BJ', name: 'Benin', currencyCode: 'XOF', geonameId: 2395170 },
      { id: 26, code:'BL', name: 'Saint Barthélemy', currencyCode: 'EUR', geonameId: 3578476 },
      { id: 27, code:'BM', name: 'Bermuda', currencyCode: 'BMD', geonameId: 3573345 },
      { id: 28, code:'BN', name: 'Brunei', currencyCode: 'BND', geonameId: 1820814 },
      { id: 29, code:'BO', name: 'Bolivia', currencyCode: 'BOB', geonameId: 3923057 },
      { id: 30, code:'BQ', name: 'Bonaire', currencyCode: 'USD', geonameId: 7626844 },
      { id: 31, code:'BR', name: 'Brazil', currencyCode: 'BRL', geonameId: 3469034 },
      { id: 32, code:'BS', name: 'Bahamas', currencyCode: 'BSD', geonameId: 3572887 },
      { id: 33, code:'BT', name: 'Bhutan', currencyCode: 'BTN', geonameId: 1252634 },
      { id: 34, code:'BV', name: 'Bouvet Island', currencyCode: 'NOK', geonameId: 3371123 },
      { id: 35, code:'BW', name: 'Botswana', currencyCode: 'BWP', geonameId: 933860 },
      { id: 36, code:'BY', name: 'Belarus', currencyCode: 'BYR', geonameId: 630336 },
      { id: 37, code:'BZ', name: 'Belize', currencyCode: 'BZD', geonameId: 3582678 },
      { id: 38, code:'CA', name: 'Canada', currencyCode: 'CAD', geonameId: 6251999 },
      { id: 39, code:'CC', name: 'Cocos Islands', currencyCode: 'AUD', geonameId: 1547376 },
      { id: 40, code:'CD', name: 'Democratic Republic of the Congo', currencyCode: 'CDF', geonameId: 203312 },
      { id: 41, code:'CF', name: 'Central African Republic', currencyCode: 'XAF', geonameId: 239880 },
      { id: 42, code:'CG', name: 'Republic of the Congo', currencyCode: 'XAF', geonameId: 2260494 },
      { id: 43, code:'CH', name: 'Switzerland', currencyCode: 'CHF', geonameId: 2658434 },
      { id: 44, code:'CI', name: 'Ivory Coast', currencyCode: 'XOF', geonameId: 2287781 },
      { id: 45, code:'CK', name: 'Cook Islands', currencyCode: 'NZD', geonameId: 1899402 },
      { id: 46, code:'CL', name: 'Chile', currencyCode: 'CLP', geonameId: 3895114 },
      { id: 47, code:'CM', name: 'Cameroon', currencyCode: 'XAF', geonameId: 2233387 },
      { id: 48, code:'CN', name: 'China', currencyCode: 'CNY', geonameId: 1814991 },
      { id: 49, code:'CO', name: 'Colombia', currencyCode: 'COP', geonameId: 3686110 },
      { id: 50, code:'CR', name: 'Costa Rica', currencyCode: 'CRC', geonameId: 3624060 },
      { id: 51, code:'CU', name: 'Cuba', currencyCode: 'CUP', geonameId: 3562981 },
      { id: 52, code:'CV', name: 'Cape Verde', currencyCode: 'CVE', geonameId: 3374766 },
      { id: 53, code:'CW', name: 'Curacao', currencyCode: 'ANG', geonameId: 7626836 },
      { id: 54, code:'CX', name: 'Christmas Island', currencyCode: 'AUD', geonameId: 2078138 },
      { id: 55, code:'CY', name: 'Cyprus', currencyCode: 'EUR', geonameId: 146669 },
      { id: 56, code:'CZ', name: 'Czechia', currencyCode: 'CZK', geonameId: 3077311 },
      { id: 57, code:'DE', name: 'Germany', currencyCode: 'EUR', geonameId: 2921044 },
      { id: 58, code:'DJ', name: 'Djibouti', currencyCode: 'DJF', geonameId: 223816 },
      { id: 59, code:'DK', name: 'Denmark', currencyCode: 'DKK', geonameId: 2623032 },
      { id: 60, code:'DM', name: 'Dominica', currencyCode: 'XCD', geonameId: 3575830 },
      { id: 61, code:'DO', name: 'Dominican Republic', currencyCode: 'DOP', geonameId: 3508796 },
      { id: 62, code:'DZ', name: 'Algeria', currencyCode: 'DZD', geonameId: 2589581 },
      { id: 63, code:'EC', name: 'Ecuador', currencyCode: 'USD', geonameId: 3658394 },
      { id: 64, code:'EE', name: 'Estonia', currencyCode: 'EUR', geonameId: 453733 },
      { id: 65, code:'EG', name: 'Egypt', currencyCode: 'EGP', geonameId: 357994 },
      { id: 66, code:'EH', name: 'Western Sahara', currencyCode: 'MAD', geonameId: 2461445 },
      { id: 67, code:'ER', name: 'Eritrea', currencyCode: 'ERN', geonameId: 338010 },
      { id: 68, code:'ES', name: 'Spain', currencyCode: 'EUR', geonameId: 2510769 },
      { id: 69, code:'ET', name: 'Ethiopia', currencyCode: 'ETB', geonameId: 337996 },
      { id: 70, code:'FI', name: 'Finland', currencyCode: 'EUR', geonameId: 660013 },
      { id: 71, code:'FJ', name: 'Fiji', currencyCode: 'FJD', geonameId: 2205218 },
      { id: 72, code:'FK', name: 'Falkland Islands', currencyCode: 'FKP', geonameId: 3474414 },
      { id: 73, code:'FM', name: 'Micronesia', currencyCode: 'USD', geonameId: 2081918 },
      { id: 74, code:'FO', name: 'Faroe Islands', currencyCode: 'DKK', geonameId: 2622320 },
      { id: 75, code:'FR', name: 'France', currencyCode: 'EUR', geonameId: 3017382 },
      { id: 76, code:'GA', name: 'Gabon', currencyCode: 'XAF', geonameId: 2400553 },
      { id: 77, code:'GB', name: 'United Kingdom', currencyCode: 'GBP', geonameId: 2635167 },
      { id: 78, code:'GD', name: 'Grenada', currencyCode: 'XCD', geonameId: 3580239 },
      { id: 79, code:'GE', name: 'Georgia', currencyCode: 'GEL', geonameId: 614540 },
      { id: 80, code:'GF', name: 'French Guiana', currencyCode: 'EUR', geonameId: 3381670 },
      { id: 81, code:'GG', name: 'Guernsey', currencyCode: 'GBP', geonameId: 3042362 },
      { id: 82, code:'GH', name: 'Ghana', currencyCode: 'GHS', geonameId: 2300660 },
      { id: 83, code:'GI', name: 'Gibraltar', currencyCode: 'GIP', geonameId: 2411586 },
      { id: 84, code:'GL', name: 'Greenland', currencyCode: 'DKK', geonameId: 3425505 },
      { id: 85, code:'GM', name: 'Gambia', currencyCode: 'GMD', geonameId: 2413451 },
      { id: 86, code:'GN', name: 'Guinea', currencyCode: 'GNF', geonameId: 2420477 },
      { id: 87, code:'GP', name: 'Guadeloupe', currencyCode: 'EUR', geonameId: 3579143 },
      { id: 88, code:'GQ', name: 'Equatorial Guinea', currencyCode: 'XAF', geonameId: 2309096 },
      { id: 89, code:'GR', name: 'Greece', currencyCode: 'EUR', geonameId: 390903 },
      { id: 90, code:'GS', name: 'South Georgia and the South Sandwich Islands', currencyCode: 'GBP', geonameId: 3474415 },
      { id: 91, code:'GT', name: 'Guatemala', currencyCode: 'GTQ', geonameId: 3595528 },
      { id: 92, code:'GU', name: 'Guam', currencyCode: 'USD', geonameId: 4043988 },
      { id: 93, code:'GW', name: 'Guinea-Bissau', currencyCode: 'XOF', geonameId: 2372248 },
      { id: 94, code:'GY', name: 'Guyana', currencyCode: 'GYD', geonameId: 3378535 },
      { id: 95, code:'HK', name: 'Hong Kong', currencyCode: 'HKD', geonameId: 1819730 },
      { id: 96, code:'HM', name: 'Heard Island and McDonald Islands', currencyCode: 'AUD', geonameId: 1547314 },
      { id: 97, code:'HN', name: 'Honduras', currencyCode: 'HNL', geonameId: 3608932 },
      { id: 98, code:'HR', name: 'Croatia', currencyCode: 'HRK', geonameId: 3202326 },
      { id: 99, code:'HT', name: 'Haiti', currencyCode: 'HTG', geonameId: 3723988 },
      { id: 100, code:'HU', name: 'Hungary', currencyCode: 'HUF', geonameId: 719819 },
      { id: 101, code:'ID', name: 'Indonesia', currencyCode: 'IDR', geonameId: 1643084 },
      { id: 102, code:'IE', name: 'Ireland', currencyCode: 'EUR', geonameId: 2963597 },
      { id: 103, code:'IL', name: 'Israel', currencyCode: 'ILS', geonameId: 294640 },
      { id: 104, code:'IM', name: 'Isle of Man', currencyCode: 'GBP', geonameId: 3042225 },
      { id: 105, code:'IN', name: 'India', currencyCode: 'INR', geonameId: 1269750 },
      { id: 106, code:'IO', name: 'British Indian Ocean Territory', currencyCode: 'USD', geonameId: 1282588 },
      { id: 107, code:'IQ', name: 'Iraq', currencyCode: 'IQD', geonameId: 99237 },
      { id: 108, code:'IR', name: 'Iran', currencyCode: 'IRR', geonameId: 130758 },
      { id: 109, code:'IS', name: 'Iceland', currencyCode: 'ISK', geonameId: 2629691 },
      { id: 110, code:'IT', name: 'Italy', currencyCode: 'EUR', geonameId: 3175395 },
      { id: 111, code:'JE', name: 'Jersey', currencyCode: 'GBP', geonameId: 3042142 },
      { id: 112, code:'JM', name: 'Jamaica', currencyCode: 'JMD', geonameId: 3489940 },
      { id: 113, code:'JO', name: 'Jordan', currencyCode: 'JOD', geonameId: 248816 },
      { id: 114, code:'JP', name: 'Japan', currencyCode: 'JPY', geonameId: 1861060 },
      { id: 115, code:'KE', name: 'Kenya', currencyCode: 'KES', geonameId: 192950 },
      { id: 116, code:'KG', name: 'Kyrgyzstan', currencyCode: 'KGS', geonameId: 1527747 },
      { id: 117, code:'KH', name: 'Cambodia', currencyCode: 'KHR', geonameId: 1831722 },
      { id: 118, code:'KI', name: 'Kiribati', currencyCode: 'AUD', geonameId: 4030945 },
      { id: 119, code:'KM', name: 'Comoros', currencyCode: 'KMF', geonameId: 921929 },
      { id: 120, code:'KN', name: 'Saint Kitts and Nevis', currencyCode: 'XCD', geonameId: 3575174 },
      { id: 121, code:'KP', name: 'North Korea', currencyCode: 'KPW', geonameId: 1873107 },
      { id: 122, code:'KR', name: 'South Korea', currencyCode: 'KRW', geonameId: 1835841 },
      { id: 123, code:'KW', name: 'Kuwait', currencyCode: 'KWD', geonameId: 285570 },
      { id: 124, code:'KY', name: 'Cayman Islands', currencyCode: 'KYD', geonameId: 3580718 },
      { id: 125, code:'KZ', name: 'Kazakhstan', currencyCode: 'KZT', geonameId: 1522867 },
      { id: 126, code:'LA', name: 'Laos', currencyCode: 'LAK', geonameId: 1655842 },
      { id: 127, code:'LB', name: 'Lebanon', currencyCode: 'LBP', geonameId: 272103 },
      { id: 128, code:'LC', name: 'Saint Lucia', currencyCode: 'XCD', geonameId: 3576468 },
      { id: 129, code:'LI', name: 'Liechtenstein', currencyCode: 'CHF', geonameId: 3042058 },
      { id: 130, code:'LK', name: 'Sri Lanka', currencyCode: 'LKR', geonameId: 1227603 },
      { id: 131, code:'LR', name: 'Liberia', currencyCode: 'LRD', geonameId: 2275384 },
      { id: 132, code:'LS', name: 'Lesotho', currencyCode: 'LSL', geonameId: 932692 },
      { id: 133, code:'LT', name: 'Lithuania', currencyCode: 'EUR', geonameId: 597427 },
      { id: 134, code:'LU', name: 'Luxembourg', currencyCode: 'EUR', geonameId: 2960313 },
      { id: 135, code:'LV', name: 'Latvia', currencyCode: 'EUR', geonameId: 458258 },
      { id: 136, code:'LY', name: 'Libya', currencyCode: 'LYD', geonameId: 2215636 },
      { id: 137, code:'MA', name: 'Morocco', currencyCode: 'MAD', geonameId: 2542007 },
      { id: 138, code:'MC', name: 'Monaco', currencyCode: 'EUR', geonameId: 2993457 },
      { id: 139, code:'MD', name: 'Moldova', currencyCode: 'MDL', geonameId: 617790 },
      { id: 140, code:'ME', name: 'Montenegro', currencyCode: 'EUR', geonameId: 3194884 },
      { id: 141, code:'MF', name: 'Saint Martin', currencyCode: 'EUR', geonameId: 3578421 },
      { id: 142, code:'MG', name: 'Madagascar', currencyCode: 'MGA', geonameId: 1062947 },
      { id: 143, code:'MH', name: 'Marshall Islands', currencyCode: 'USD', geonameId: 2080185 },
      { id: 144, code:'MK', name: 'Macedonia', currencyCode: 'MKD', geonameId: 718075 },
      { id: 145, code:'ML', name: 'Mali', currencyCode: 'XOF', geonameId: 2453866 },
      { id: 146, code:'MM', name: 'Myanmar', currencyCode: 'MMK', geonameId: 1327865 },
      { id: 147, code:'MN', name: 'Mongolia', currencyCode: 'MNT', geonameId: 2029969 },
      { id: 148, code:'MO', name: 'Macao', currencyCode: 'MOP', geonameId: 1821275 },
      { id: 149, code:'MP', name: 'Northern Mariana Islands', currencyCode: 'USD', geonameId: 4041468 },
      { id: 150, code:'MQ', name: 'Martinique', currencyCode: 'EUR', geonameId: 3570311 },
      { id: 151, code:'MR', name: 'Mauritania', currencyCode: 'MRO', geonameId: 2378080 },
      { id: 152, code:'MS', name: 'Montserrat', currencyCode: 'XCD', geonameId: 3578097 },
      { id: 153, code:'MT', name: 'Malta', currencyCode: 'EUR', geonameId: 2562770 },
      { id: 154, code:'MU', name: 'Mauritius', currencyCode: 'MUR', geonameId: 934292 },
      { id: 155, code:'MV', name: 'Maldives', currencyCode: 'MVR', geonameId: 1282028 },
      { id: 156, code:'MW', name: 'Malawi', currencyCode: 'MWK', geonameId: 927384 },
      { id: 157, code:'MX', name: 'Mexico', currencyCode: 'MXN', geonameId: 3996063 },
      { id: 158, code:'MY', name: 'Malaysia', currencyCode: 'MYR', geonameId: 1733045 },
      { id: 159, code:'MZ', name: 'Mozambique', currencyCode: 'MZN', geonameId: 1036973 },
      { id: 160, code:'NA', name: 'Namibia', currencyCode: 'NAD', geonameId: 3355338 },
      { id: 161, code:'NC', name: 'New Caledonia', currencyCode: 'XPF', geonameId: 2139685 },
      { id: 162, code:'NE', name: 'Niger', currencyCode: 'XOF', geonameId: 2440476 },
      { id: 163, code:'NF', name: 'Norfolk Island', currencyCode: 'AUD', geonameId: 2155115 },
      { id: 164, code:'NG', name: 'Nigeria', currencyCode: 'NGN', geonameId: 2328926 },
      { id: 165, code:'NI', name: 'Nicaragua', currencyCode: 'NIO', geonameId: 3617476 },
      { id: 166, code:'NL', name: 'Netherlands', currencyCode: 'EUR', geonameId: 2750405 },
      { id: 167, code:'NO', name: 'Norway', currencyCode: 'NOK', geonameId: 3144096 },
      { id: 168, code:'NP', name: 'Nepal', currencyCode: 'NPR', geonameId: 1282988 },
      { id: 169, code:'NR', name: 'Nauru', currencyCode: 'AUD', geonameId: 2110425 },
      { id: 170, code:'NU', name: 'Niue', currencyCode: 'NZD', geonameId: 4036232 },
      { id: 171, code:'NZ', name: 'New Zealand', currencyCode: 'NZD', geonameId: 2186224 },
      { id: 172, code:'OM', name: 'Oman', currencyCode: 'OMR', geonameId: 286963 },
      { id: 173, code:'PA', name: 'Panama', currencyCode: 'PAB', geonameId: 3703430 },
      { id: 174, code:'PE', name: 'Peru', currencyCode: 'PEN', geonameId: 3932488 },
      { id: 175, code:'PF', name: 'French Polynesia', currencyCode: 'XPF', geonameId: 4030656 },
      { id: 176, code:'PG', name: 'Papua New Guinea', currencyCode: 'PGK', geonameId: 2088628 },
      { id: 177, code:'PH', name: 'Philippines', currencyCode: 'PHP', geonameId: 1694008 },
      { id: 178, code:'PK', name: 'Pakistan', currencyCode: 'PKR', geonameId: 1168579 },
      { id: 179, code:'PL', name: 'Poland', currencyCode: 'PLN', geonameId: 798544 },
      { id: 180, code:'PM', name: 'Saint Pierre and Miquelon', currencyCode: 'EUR', geonameId: 3424932 },
      { id: 181, code:'PN', name: 'Pitcairn Islands', currencyCode: 'NZD', geonameId: 4030699 },
      { id: 182, code:'PR', name: 'Puerto Rico', currencyCode: 'USD', geonameId: 4566966 },
      { id: 183, code:'PS', name: 'Palestine', currencyCode: 'ILS', geonameId: 6254930 },
      { id: 184, code:'PT', name: 'Portugal', currencyCode: 'EUR', geonameId: 2264397 },
      { id: 185, code:'PW', name: 'Palau', currencyCode: 'USD', geonameId: 1559582 },
      { id: 186, code:'PY', name: 'Paraguay', currencyCode: 'PYG', geonameId: 3437598 },
      { id: 187, code:'QA', name: 'Qatar', currencyCode: 'QAR', geonameId: 289688 },
      { id: 188, code:'RE', name: 'Réunion', currencyCode: 'EUR', geonameId: 935317 },
      { id: 189, code:'RO', name: 'Romania', currencyCode: 'RON', geonameId: 798549 },
      { id: 190, code:'RS', name: 'Serbia', currencyCode: 'RSD', geonameId: 6290252 },
      { id: 191, code:'RU', name: 'Russia', currencyCode: 'RUB', geonameId: 2017370 },
      { id: 192, code:'RW', name: 'Rwanda', currencyCode: 'RWF', geonameId: 49518 },
      { id: 193, code:'SA', name: 'Saudi Arabia', currencyCode: 'SAR', geonameId: 102358 },
      { id: 194, code:'SB', name: 'Solomon Islands', currencyCode: 'SBD', geonameId: 2103350 },
      { id: 195, code:'SC', name: 'Seychelles', currencyCode: 'SCR', geonameId: 241170 },
      { id: 196, code:'SD', name: 'Sudan', currencyCode: 'SDG', geonameId: 366755 },
      { id: 197, code:'SE', name: 'Sweden', currencyCode: 'SEK', geonameId: 2661886 },
      { id: 198, code:'SG', name: 'Singapore', currencyCode: 'SGD', geonameId: 1880251 },
      { id: 199, code:'SH', name: 'Saint Helena', currencyCode: 'SHP', geonameId: 3370751 },
      { id: 200, code:'SI', name: 'Slovenia', currencyCode: 'EUR', geonameId: 3190538 },
      { id: 201, code:'SJ', name: 'Svalbard and Jan Mayen', currencyCode: 'NOK', geonameId: 607072 },
      { id: 202, code:'SK', name: 'Slovakia', currencyCode: 'EUR', geonameId: 3057568 },
      { id: 203, code:'SL', name: 'Sierra Leone', currencyCode: 'SLL', geonameId: 2403846 },
      { id: 204, code:'SM', name: 'San Marino', currencyCode: 'EUR', geonameId: 3168068 },
      { id: 205, code:'SN', name: 'Senegal', currencyCode: 'XOF', geonameId: 2245662 },
      { id: 206, code:'SO', name: 'Somalia', currencyCode: 'SOS', geonameId: 51537 },
      { id: 207, code:'SR', name: 'Suriname', currencyCode: 'SRD', geonameId: 3382998 },
      { id: 208, code:'SS', name: 'South Sudan', currencyCode: 'SSP', geonameId: 7909807 },
      { id: 209, code:'ST', name: 'São Tomé and Príncipe', currencyCode: 'STD', geonameId: 2410758 },
      { id: 210, code:'SV', name: 'El Salvador', currencyCode: 'USD', geonameId: 3585968 },
      { id: 211, code:'SX', name: 'Sint Maarten', currencyCode: 'ANG', geonameId: 7609695 },
      { id: 212, code:'SY', name: 'Syria', currencyCode: 'SYP', geonameId: 163843 },
      { id: 213, code:'SZ', name: 'Swaziland', currencyCode: 'SZL', geonameId: 934841 },
      { id: 214, code:'TC', name: 'Turks and Caicos Islands', currencyCode: 'USD', geonameId: 3576916 },
      { id: 215, code:'TD', name: 'Chad', currencyCode: 'XAF', geonameId: 2434508 },
      { id: 216, code:'TF', name: 'French Southern Territories', currencyCode: 'EUR', geonameId: 1546748 },
      { id: 217, code:'TG', name: 'Togo', currencyCode: 'XOF', geonameId: 2363686 },
      { id: 218, code:'TH', name: 'Thailand', currencyCode: 'THB', geonameId: 1605651 },
      { id: 219, code:'TJ', name: 'Tajikistan', currencyCode: 'TJS', geonameId: 1220409 },
      { id: 220, code:'TK', name: 'Tokelau', currencyCode: 'NZD', geonameId: 4031074 },
      { id: 221, code:'TL', name: 'East Timor', currencyCode: 'USD', geonameId: 1966436 },
      { id: 222, code:'TM', name: 'Turkmenistan', currencyCode: 'TMT', geonameId: 1218197 },
      { id: 223, code:'TN', name: 'Tunisia', currencyCode: 'TND', geonameId: 2464461 },
      { id: 224, code:'TO', name: 'Tonga', currencyCode: 'TOP', geonameId: 4032283 },
      { id: 225, code:'TR', name: 'Turkey', currencyCode: 'TRY', geonameId: 298795 },
      { id: 226, code:'TT', name: 'Trinidad and Tobago', currencyCode: 'TTD', geonameId: 3573591 },
      { id: 227, code:'TV', name: 'Tuvalu', currencyCode: 'AUD', geonameId: 2110297 },
      { id: 228, code:'TW', name: 'Taiwan', currencyCode: 'TWD', geonameId: 1668284 },
      { id: 229, code:'TZ', name: 'Tanzania', currencyCode: 'TZS', geonameId: 149590 },
      { id: 230, code:'UA', name: 'Ukraine', currencyCode: 'UAH', geonameId: 690791 },
      { id: 231, code:'UG', name: 'Uganda', currencyCode: 'UGX', geonameId: 226074 },
      { id: 232, code:'UM', name: 'U.S. Minor Outlying Islands', currencyCode: 'USD', geonameId: 5854968 },
      { id: 233, code:'US', name: 'United States', currencyCode: 'USD', geonameId: 6252001 },
      { id: 234, code:'UY', name: 'Uruguay', currencyCode: 'UYU', geonameId: 3439705 },
      { id: 235, code:'UZ', name: 'Uzbekistan', currencyCode: 'UZS', geonameId: 1512440 },
      { id: 236, code:'VA', name: 'Vatican City', currencyCode: 'EUR', geonameId: 3164670 },
      { id: 237, code:'VC', name: 'Saint Vincent and the Grenadines', currencyCode: 'XCD', geonameId: 3577815 },
      { id: 238, code:'VE', name: 'Venezuela', currencyCode: 'VEF', geonameId: 3625428 },
      { id: 239, code:'VG', name: 'British Virgin Islands', currencyCode: 'USD', geonameId: 3577718 },
      { id: 240, code:'VI', name: 'U.S. Virgin Islands', currencyCode: 'USD', geonameId: 4796775 },
      { id: 241, code:'VN', name: 'Vietnam', currencyCode: 'VND', geonameId: 1562822 },
      { id: 242, code:'VU', name: 'Vanuatu', currencyCode: 'VUV', geonameId: 2134431 },
      { id: 243, code:'WF', name: 'Wallis and Futuna', currencyCode: 'XPF', geonameId: 4034749 },
      { id: 244, code:'WS', name: 'Samoa', currencyCode: 'WST', geonameId: 4034894 },
      { id: 245, code:'XK', name: 'Kosovo', currencyCode: 'EUR', geonameId: 831053 },
      { id: 246, code:'YE', name: 'Yemen', currencyCode: 'YER', geonameId: 69543 },
      { id: 247, code:'YT', name: 'Mayotte', currencyCode: 'EUR', geonameId: 1024031 },
      { id: 248, code:'ZA', name: 'South Africa', currencyCode: 'ZAR', geonameId: 953987 },
      { id: 249, code:'ZM', name: 'Zambia', currencyCode: 'ZMW', geonameId: 895949 },
      { id: 250, code:'ZW', name: 'Zimbabwe', currencyCode: 'ZWL', geonameId: 878675 }
    ];
    return {countries};
  }
}
