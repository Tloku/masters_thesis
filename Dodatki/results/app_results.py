import matplotlib.pyplot as plt

# Prepare the data for plotting
frameworks_large = ['Angular', 'React', 'Vue']
load_time_large = [15691, 647, 12941]
first_paint_large = [15705.5, 0, 14342.2]
speed_index_large = [15381, 1299, 0]
dom_content_loaded_large = [4076, 601, 3330]
load_event_end_large = [15599, 601, 12884]
fully_loaded_large = [19024, 647, 20868]
first_contentful_paint_large = [15797, 53561.3, 14399]
first_meaningful_paint_large = [15797, 0, 14399]
largest_contentful_paint_large = [15797, 0, 14399]
total_blocking_time_large = [13976, 0, 12327]

# Create subplots for each metric
fig, axs = plt.subplots(5, 2, figsize=(10, 15))

# Plot data
axs[0, 0].bar(frameworks_large, load_time_large, color=['blue', 'orange', 'green'])
axs[0, 0].set_title('Czas ładowania strony (ms)')

axs[0, 1].bar(frameworks_large, first_paint_large, color=['blue', 'orange', 'green'])
axs[0, 1].set_title('Czas renderowania pierwszego fragmentu treści (ms)')

axs[1, 0].bar(frameworks_large, speed_index_large, color=['blue', 'orange', 'green'])
axs[1, 0].set_title('Czas załadowania pierwszej widocznej części strony (ms)')

axs[1, 1].bar(frameworks_large, dom_content_loaded_large, color=['blue', 'orange', 'green'])
axs[1, 1].set_title('Czas parsowania dokumentu przez przeglądarkę (ms)')

axs[2, 0].bar(frameworks_large, load_event_end_large, color=['blue', 'orange', 'green'])
axs[2, 0].set_title('Czas pełnego załadowania strony i jej zasobów (ms)')

axs[2, 1].bar(frameworks_large, fully_loaded_large, color=['blue', 'orange', 'green'])
axs[2, 1].set_title('Całkowity czas załadowania strony (ms)')

axs[3, 0].bar(frameworks_large, first_contentful_paint_large, color=['blue', 'orange', 'green'])
axs[3, 0].set_title('Czas renderowania pierwszego fragmentu DOM (ms)')

axs[3, 1].bar(frameworks_large, first_meaningful_paint_large, color=['blue', 'orange', 'green'])
axs[3, 1].set_title('Czas pokazania głównej treści strony (ms)')

axs[4, 0].bar(frameworks_large, largest_contentful_paint_large, color=['blue', 'orange', 'green'])
axs[4, 0].set_title('Czas pojawienia się największego elementu treści (ms)')

fig.delaxes(axs[4, 1])

# Adjust layout
plt.tight_layout()
plt.show()
