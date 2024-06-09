import tkinter as tk
import random
from tkinter import ttk

winner_framework = None
winner_label = None


def launch(angular, react, vue):
    global winner_label
    root = tk.Tk()
    root.title("Wybór frameworka frontendowego z wnioskowaniem rozmytym")
    root.geometry("600x650")

    performance_label = tk.Label(root, text="Jaka musi być wydajność frameworka? (0-100)")
    performance_label.pack(pady=5)
    performance_response = tk.IntVar()
    performance_dropdown = ttk.Entry(root, textvariable=performance_response)
    performance_dropdown.pack(pady=5)

    large_data_performance_label = tk.Label(root,
                                            text="Jaka musi być wydajność frameworka dla wyświetlania dużej ilości treści? (0-100)")
    large_data_performance_label.pack(pady=5)
    large_data_performance_response = tk.IntVar()
    large_data_performance_dropdown = ttk.Entry(root, textvariable=large_data_performance_response)
    large_data_performance_dropdown.pack(pady=5)

    package_size_label = tk.Label(root, text="Jaki musi być rozmiar paczki produkcyjnej frameworka? (0-1000 MB)")
    package_size_label.pack(pady=5)
    package_size_response = tk.IntVar()
    package_size_dropdown = ttk.Entry(root, textvariable=package_size_response)
    package_size_dropdown.pack(pady=5)

    dom_performance_label = tk.Label(root, text="Jaki musi być wydajność DOM frameworka? (0-100)")
    dom_performance_label.pack(pady=5)
    dom_performance_response = tk.IntVar()
    dom_performance_dropdown = ttk.Entry(root, textvariable=dom_performance_response)
    dom_performance_dropdown.pack(pady=5)

    dom_performance_label = tk.Label(root, text="Jaki musi być wydajność DOM frameworka dla wielu elementów? (0-100)")
    dom_performance_label.pack(pady=5)
    large_data_dom_performance_response = tk.IntVar()
    large_data_dom_performance_dropdown = ttk.Entry(root, textvariable=large_data_dom_performance_response)
    large_data_dom_performance_dropdown.pack(pady=5)

    learning_curve_label = tk.Label(root, text="Jaka musi być krzywa nauki frameworka? (0-100)")
    learning_curve_label.pack(pady=5)
    learning_curve_response = tk.IntVar()
    learning_curve_dropdown = ttk.Entry(root, textvariable=learning_curve_response)
    learning_curve_dropdown.pack(pady=5)

    security_label = tk.Label(root, text="Czy framework musi mieć wbudowane elementy bezpieczeństwa? (0-10)")
    security_label.pack(pady=5)
    security_response = tk.IntVar()
    security_dropdown = ttk.Entry(root, textvariable=security_response)
    security_dropdown.pack(pady=5)

    popularity_label = tk.Label(root, text="Jaką popularnością ma się cieszyć framework? (0-100)")
    popularity_label.pack(pady=5)
    popularity_response = tk.IntVar()
    popularity_dropdown = ttk.Entry(root, textvariable=popularity_response)
    popularity_dropdown.pack(pady=5)

    flexibility_label = tk.Label(root, text="Jak elastyczny ma być framework? (0-100)")
    flexibility_label.pack(pady=5)
    flexibility_response = tk.IntVar()
    flexibility_dropdown = ttk.Entry(root, textvariable=flexibility_response)
    flexibility_dropdown.pack(pady=10)

    button = tk.Button(root, text="Wybierz Framework",
                       command=lambda: run_simulation(angular, react, vue, performance=performance_response.get(),
                                                      large_data_performance=large_data_performance_response.get(),
                                                      package_size=package_size_response.get(),
                                                      dom_performance=dom_performance_response.get(),
                                                      large_data_dom_performance=large_data_dom_performance_response.get(),
                                                      learning_curve=learning_curve_response.get(),
                                                      security=security_response.get(),
                                                      popularity=popularity_response.get(),
                                                      flexibility=flexibility_response.get()))
    button.pack(pady=10)

    winner_label = tk.Label(root)
    winner_label.pack(pady=5)
    winner_label.pack_forget()

    root.mainloop()


def run_simulation(angular, react, vue, performance,
                   large_data_performance,
                   package_size,
                   dom_performance,
                   large_data_dom_performance,
                   learning_curve,
                   security,
                   popularity,
                   flexibility):
    global winner_label
    angular_score = angular.simulation_compute(performance,
                                               large_data_performance,
                                               package_size,
                                               dom_performance,
                                               large_data_dom_performance,
                                               learning_curve,
                                               security,
                                               popularity,
                                               flexibility)
    react_score = react.simulation_compute(performance,
                                           large_data_performance,
                                           package_size,
                                           dom_performance,
                                           large_data_dom_performance,
                                           learning_curve,
                                           security,
                                           popularity,
                                           flexibility)
    vue_score = vue.simulation_compute(performance,
                                       large_data_performance,
                                       package_size,
                                       dom_performance,
                                       large_data_dom_performance,
                                       learning_curve,
                                       security,
                                       popularity,
                                       flexibility)

    scores = {
        'Angular': angular_score,
        'React': react_score,
        'Vue': vue_score
    }

    max_score = max(scores.values())
    winning_frameworks = [framework for framework, score in scores.items() if score == max_score]

    if len(winning_frameworks) > 1:
        winning_framework = random.choice(winning_frameworks)
    else:
        winning_framework = winning_frameworks[0]

    print(winning_framework)
    winner_label.config(text=f'Najlepszy framework to {winning_framework}.')
    winner_label.pack()