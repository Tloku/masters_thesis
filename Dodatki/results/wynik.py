import matplotlib.pyplot as plt

# Prepare the data for plotting
frameworks = ['Angular', 'React', 'Vue']
load_time = [3399, 1829, 2653]
ttfb = [257, 256, 257]
first_paint = [2345.9, 1837.0, 1504.5]
speed_index = [2847, 2460, 2081]
dom_content_loaded = [2291, 1730, 1451]
load_event_end = [3349, 1730, 2615]
fully_loaded = [3399, 3017, 2658]
first_contentful_paint = [2395, 1936, 1542]
first_meaningful_paint = [2395, 1936, 1542]
largest_contentful_paint = [3552, 3034, 2842]
cumulative_layout_shift = [0.175171, 0.000659, 0.004091]

# Plot each metric separately
metrics = [
    ('Czas ładowania strony (ms)', load_time),
    ('TTFB (ms)', ttfb),
    ('Czas renderowania pierwszego fragmentu treści (ms)', first_paint),
    ('Czas załadowania pierwszej widocznej części strony', speed_index),
    ('Czas parsowania dokumentu przez przeglądarkę (ms)', dom_content_loaded),
    ('Czas pełnego załadowania strony i jej zasobów (ms)', load_event_end),
    ('Całkowity czas załadowania strony (ms)', fully_loaded),
    ('Czas renderowania pierwszego fragmentu DOM (ms)', first_contentful_paint),
    ('Czas pokazania głównej treści strony (ms)', first_meaningful_paint),
    ('Czas pojawienia się największego elementu treści (ms)', largest_contentful_paint),
    ('Miara stabilności wizualnej', cumulative_layout_shift)
]

for title, values in metrics:
    plt.figure(figsize=(10, 6))
    plt.bar(frameworks, values, color=['blue', 'orange', 'green'])
    plt.title(title)
    plt.tight_layout()
    plt.show()
