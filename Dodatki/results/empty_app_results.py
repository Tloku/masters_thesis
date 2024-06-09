import matplotlib.pyplot as plt

# Prepare the data for plotting
frameworks_empty = ['Angular', 'React', 'Vue']
load_time_empty = [799, 650, 492]
first_paint_empty = [1, 0, 0]
speed_index_empty = [1299, 1199, 1099]
dom_content_loaded_empty = [776, 595, 430]
load_event_end_empty = [776, 595, 430]
fully_loaded_empty = [853, 650, 492]

# Create subplots for each metric
fig, axs = plt.subplots(1, 2, figsize=(10, 5))

# Plot data
# axs[0, 0].bar(frameworks_empty, load_time_empty, color=['blue', 'orange', 'green'])
# axs[0, 0].set_title('Czas ładowania strony (ms)')
#
# axs[0, 1].bar(frameworks_empty, first_paint_empty, color=['blue', 'orange', 'green'])
# axs[0, 1].set_title('Czas renderowania pierwszego fragmentu treści (ms)')
#
# axs[1, 0].bar(frameworks_empty, speed_index_empty, color=['blue', 'orange', 'green'])
# axs[1, 0].set_title('Czas załadowania pierwszej widocznej części strony (ms)')
#
# axs[1, 1].bar(frameworks_empty, dom_content_loaded_empty, color=['blue', 'orange', 'green'])
# axs[1, 1].set_title('Czas parsowania dokumentu przez przeglądarkę (ms)')

axs[0].bar(frameworks_empty, load_event_end_empty, color=['blue', 'orange', 'green'])
axs[0].set_title('Czas pełnego załadowania strony i jej zasobów (ms)')

axs[1].bar(frameworks_empty, fully_loaded_empty, color=['blue', 'orange', 'green'])
axs[1].set_title('Całkowity czas załadowania strony (ms)')

# Adjust layout
plt.tight_layout()
plt.show()
