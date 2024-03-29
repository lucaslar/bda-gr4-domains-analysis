/**
 * Enum containing database function names used in the Domain Analysis project.
 */
export enum DomainAnalysisFunctionName {
    DOMAIN_COUNT = 'domain_count',
    TOP_10_A_GLOBAL = 'top_10_a_global',
    TOP_10_MX_GLOBAL = 'top_10_mx_global',
    TOP_10_A_CHECKED_GLOBAL = 'top_10_a_checked_global',
    TOP_10_MX_CHECKED_GLOBAL = 'top_10_mx_checked_global',
    MX_COUNT_GROUPED = 'mx_count_grouped',
    A_COUNT_GROUPED = 'a_count_grouped',
    PERCENTAGE_OF_MX_LOCALHOST = 'percentage_of_mx_localhost',
    DOMAIN_ACCESS_STATUS_CODES = 'domain_access_status_codes',
    PERCENTAGE_OF_REDIRECTIONS = 'percentage_of_redirections',
    PERCENTAGE_OF_REDIRECTIONS_CODE_200 = 'percentage_of_redirections_code_200',
    TOP_10_REDIRECTED_TO = 'top_10_redirected_to',
    TOP_10_MX_COUNTRIES = 'top_10_mx_countries',
    TOP_10_MX_CITIES = 'top_10_mx_cities',
    TOP_10_MX_ASN = 'top_10_mx_asn',
    PERCENTAGE_MX_PROVIDERS_OUTSIDE_OF_GER = 'percentage_of_mx_providers_outside_of_germany',
    PERCENTAGE_HAS_IP_V6 = 'percentage_has_ip_v6',
    AVG_SOA_MINIMUM = 'avg_soa_minimum',
    AVG_SOA_REFRESH = 'avg_soa_refresh',
    SOA_NAMESERVERS_COUNT_WHERE_NO_ERR = 'soa_nameservers_count_where_no_err',
    SOA_TOP_TEN_CITIES = 'top_10_soa_cities',
    SOA_TOP_TEN_ASN = 'top_10_soa_asn',
    SOA_TOP_TEN_COUNTRIES = 'top_10_soa_countries',
    SOA_OUTSIDE_GER = 'percentage_of_soa_providers_outside_of_germany',
    PERCENTAGE_OF_MX_CHECKED_LOCALHOST = 'percentage_of_mx_checked_has_localhost',
    PERCENTAGE_OF_A_DIFF_IGNORING_ERRS = 'percentage_of_diff_a_records_ignoring_errs',
    PERCENTAGE_OF_MX_DIFF_IGNORING_ERRS = 'percentage_of_diff_mx_records_ignoring_errs',
    A_CHECKED_COUNT_GROUPED = 'a_checked_count_grouped',
    MX_CHECKED_COUNT_GROUPED = 'mx_checked_count_grouped',
}
