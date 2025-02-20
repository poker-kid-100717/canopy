def calculate_proration(allocation_amount, investor_amounts):
    total_average = sum([investor['average_amount'] for investor in investor_amounts])
    result = {}

    for investor in investor_amounts:
        proportion = investor['average_amount'] / total_average
        allocated_amount = allocation_amount * proportion
        # Ensure the allocated amount doesn't exceed the requested amount
        allocated_amount = min(allocated_amount, investor['requested_amount'])
        result[investor['name']] = round(allocated_amount, 2)
    
    return result
