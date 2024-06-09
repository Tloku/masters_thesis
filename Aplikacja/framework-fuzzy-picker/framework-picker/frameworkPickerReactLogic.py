
import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl
import matplotlib.pyplot as plt


class ReactPickLogic:
    def __init__(self):
        self.__PERFORMANCE_LABEL = "Performance"
        self.__LARGE_DATA_PERFORMANCE_LABEL = "Large_Data_Performance"
        self.__PACKAGE_SIZE_LABEL = "Package_Size"
        self.__D0M_PERFORMANCE_LABEL = "DOM_Performance"
        self.__LARGE_DATA_DOM_PERFORMANCE_LABEL = "Large_Data_DOM_Performance"
        self.__LEARNING_CURVE_LABEL = "Learning_Curve"
        self.__SECURITY_LABEL = "Security"
        self.__POPULARITY_LABEL = "Popularity"
        self.__FLEXIBILITY_LABEL = "Flexibility"
        self.__REACT_LABEL = "React"

        self.__define_antecedents_and_consequents()
        self.__define_membership_functions()
        self.__define_react_rules()

        self.__react_ctrl = ctrl.ControlSystem(self.__react_rules)

        self.__react_sim = ctrl.ControlSystemSimulation(self.__react_ctrl)

    def __define_antecedents_and_consequents(self) -> None:
        self.__performance = ctrl.Antecedent(np.arange(0, 101, 1), self.__PERFORMANCE_LABEL)
        self.__large_data_performance = ctrl.Antecedent(np.arange(0, 101, 1), self.__LARGE_DATA_PERFORMANCE_LABEL)
        self.__package_size = ctrl.Antecedent(np.arange(0, 1001, 1), self.__PACKAGE_SIZE_LABEL)
        self.__dom_performance = ctrl.Antecedent(np.arange(0, 101, 1), self.__D0M_PERFORMANCE_LABEL)
        self.__large_data_dom_performance = ctrl.Antecedent(np.arange(0, 101, 1), self.__LARGE_DATA_DOM_PERFORMANCE_LABEL)
        self.__learning_curve = ctrl.Antecedent(np.arange(0, 101, 1), self.__LEARNING_CURVE_LABEL)
        self.__security = ctrl.Antecedent(np.arange(0, 11, 1), self.__SECURITY_LABEL)
        self.__popularity = ctrl.Antecedent(np.arange(0, 101, 1), self.__POPULARITY_LABEL)
        self.__flexibility = ctrl.Antecedent(np.arange(0, 101, 1), self.__FLEXIBILITY_LABEL)

        self.__react = ctrl.Consequent(np.arange(0, 2, 1), self.__REACT_LABEL)

    def __define_membership_functions(self) -> None:
        self.__performance['bad'] = fuzz.trapmf(self.__performance.universe, [0, 0, 20, 40])
        self.__performance['average'] = fuzz.trapmf(self.__performance.universe, [20, 40, 60, 70])
        self.__performance['good'] = fuzz.trapmf(self.__performance.universe, [60, 70, 100, 100])

        self.__large_data_performance['bad'] = fuzz.trapmf(self.__large_data_performance.universe, [0, 0, 20, 40])
        self.__large_data_performance['average'] = fuzz.trapmf(self.__large_data_performance.universe, [20, 40, 60, 70])
        self.__large_data_performance['good'] = fuzz.trapmf(self.__large_data_performance.universe, [60, 70, 100, 100])

        self.__package_size['small'] = fuzz.trapmf(self.__package_size.universe, [0, 0, 50, 100])
        self.__package_size['medium'] = fuzz.trapmf(self.__package_size.universe, [50, 100, 200, 300])
        self.__package_size['large'] = fuzz.trapmf(self.__package_size.universe, [200, 300, 1000, 1000])

        self.__dom_performance['bad'] = fuzz.trapmf(self.__dom_performance.universe, [0, 0, 20, 40])
        self.__dom_performance['average'] = fuzz.trapmf(self.__dom_performance.universe, [20, 40, 60, 70])
        self.__dom_performance['good'] = fuzz.trapmf(self.__dom_performance.universe, [60, 70, 100, 100])

        self.__large_data_dom_performance['bad'] = fuzz.trapmf(self.__large_data_dom_performance.universe, [0, 0, 20, 40])
        self.__large_data_dom_performance['average'] = fuzz.trapmf(self.__large_data_dom_performance.universe, [20, 40, 60, 70])
        self.__large_data_dom_performance['good'] = fuzz.trapmf(self.__large_data_dom_performance.universe, [60, 70, 100, 100])

        self.__learning_curve['easy'] = fuzz.trapmf(self.__learning_curve.universe, [0, 0, 10, 30])
        self.__learning_curve['medium'] = fuzz.trapmf(self.__learning_curve.universe, [10, 30, 60, 80])
        self.__learning_curve['hard'] = fuzz.trapmf(self.__learning_curve.universe, [60, 80, 100, 100])

        self.__security['none'] = fuzz.trapmf(self.__security.universe, [0, 0, 3, 5])
        self.__security['implemented'] = fuzz.trapmf(self.__security.universe, [3, 5, 10, 10])

        self.__popularity['decreasing'] = fuzz.trapmf(self.__popularity.universe, [0, 0, 20, 40])
        self.__popularity['stale'] = fuzz.trapmf(self.__popularity.universe, [20, 40, 70, 90])
        self.__popularity['increasing'] = fuzz.trapmf(self.__popularity.universe, [70, 90, 100, 100])

        self.__flexibility['stiff'] = fuzz.trapmf(self.__flexibility.universe, [0, 0, 20, 40])
        self.__flexibility['medium'] = fuzz.trapmf(self.__flexibility.universe, [20, 40, 70, 90])
        self.__flexibility['flex'] = fuzz.trapmf(self.__flexibility.universe, [70, 90, 100, 100])

        self.__react['not_choose'] = fuzz.trimf(self.__react.universe, [0, 0, 1])
        self.__react['choose'] = fuzz.trimf(self.__react.universe, [1, 1, 2])

    def __define_react_rules(self) -> None:
        self.__react_rules = [
            ctrl.Rule(
                self.__performance['bad'] & self.__large_data_performance['average'] & self.__package_size['large'],
                self.__react['not_choose']),
            ctrl.Rule(self.__performance['good'] & self.__package_size['medium'] & self.__dom_performance['good'],
                      self.__react['choose']),
            ctrl.Rule(
                self.__dom_performance['good'] & self.__large_data_dom_performance['average'] & (self.__learning_curve['easy'] | self.__learning_curve['medium']), self.__react['choose']),
            ctrl.Rule(self.__performance['average'] & self.__package_size['small'] & self.__security['none'],
                      self.__react['choose']),
            ctrl.Rule((self.__learning_curve['medium'] | self.__learning_curve['easy']) & self.__popularity['increasing'],
                      self.__react['choose']),
            ctrl.Rule(self.__performance['bad'] & self.__flexibility['stiff'], self.__react['not_choose']),
            ctrl.Rule(self.__dom_performance['average'] & (
                        self.__large_data_dom_performance['average'] | self.__large_data_dom_performance['good']) &
                      self.__package_size['small'], self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__large_data_dom_performance['good'] & self.__package_size['small'],
                self.__react['choose']),
            ctrl.Rule((self.__popularity['stale'] | self.__popularity['decreasing']), self.__react['not_choose']),
            ctrl.Rule(self.__security['implemented'], self.__react['not_choose']),
            ctrl.Rule(
                self.__security['implemented'] & (self.__learning_curve['easy'] | self.__learning_curve['medium']) & self.__performance['good'],
                self.__react['choose']),
            ctrl.Rule(self.__package_size['large'] & self.__security['implemented'], self.__react['not_choose']),
            ctrl.Rule(self.__package_size['small'] & self.__security['none'], self.__react['choose']),

        ]

        self.__react_rules.extend([
            ctrl.Rule(
                self.__performance['good'] & self.__package_size['medium'] & self.__large_data_dom_performance['good'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__large_data_dom_performance['good'] & self.__learning_curve['easy'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__package_size['small'] & self.__learning_curve['easy'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__package_size['small'] & self.__large_data_dom_performance[
                    'good'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__flexibility['medium'] & self.__large_data_dom_performance['good'],
                self.__react['choose']),
            ctrl.Rule(
                self.__large_data_dom_performance['good'] & self.__learning_curve['easy'] & self.__popularity[
                    'increasing'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__package_size['medium'] & self.__security['none'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__flexibility['flex'] & self.__large_data_dom_performance['good'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__popularity['increasing'] & self.__learning_curve['medium'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__package_size['medium'] & self.__flexibility['flex'],
                self.__react['choose']),
        ])
        self.__react_rules.extend([
            ctrl.Rule(
                self.__performance['good'] & self.__package_size['small'] & self.__large_data_dom_performance[
                    'average'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__flexibility['flex'] & self.__learning_curve['easy'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__popularity['increasing'] & self.__flexibility['flex'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__large_data_dom_performance['good'] & self.__security['none'],
                self.__react['choose']),
            ctrl.Rule(
                self.__large_data_dom_performance['average'] & self.__learning_curve['easy'] & self.__flexibility[
                    'flex'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__flexibility['medium'] & self.__popularity['increasing'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__package_size['small'] & self.__popularity['increasing'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__large_data_dom_performance['good'] & self.__security['none'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['average'] & self.__large_data_dom_performance['good'] & self.__popularity[
                    'increasing'],
                self.__react['choose']),
            ctrl.Rule(
                self.__performance['good'] & self.__learning_curve['medium'] & self.__flexibility['flex'],
                self.__react['choose']),
        ])

    def simulation_compute(self, performance, large_data_performance, package_size, dom_performance,
                           large_data_dom_performance, learning_curve, security, popularity, flexibility) -> float:

        performance = np.clip(performance, 0, 100)
        large_data_performance = np.clip(large_data_performance, 0, 100)
        package_size = np.clip(package_size, 0, 1000)
        dom_performance = np.clip(dom_performance, 0, 100)
        large_data_dom_performance = np.clip(large_data_dom_performance, 0, 100)
        learning_curve = np.clip(learning_curve, 0, 100)
        security = np.clip(security, 0, 10)
        popularity = np.clip(popularity, 0, 100)
        flexibility = np.clip(flexibility, 0, 100)

        self.__react_sim.input[self.__PERFORMANCE_LABEL] = performance
        self.__react_sim.input[self.__LARGE_DATA_PERFORMANCE_LABEL] = large_data_performance
        self.__react_sim.input[self.__PACKAGE_SIZE_LABEL] = package_size
        self.__react_sim.input[self.__D0M_PERFORMANCE_LABEL] = dom_performance
        self.__react_sim.input[self.__LARGE_DATA_DOM_PERFORMANCE_LABEL] = large_data_dom_performance
        self.__react_sim.input[self.__LEARNING_CURVE_LABEL] = learning_curve
        self.__react_sim.input[self.__SECURITY_LABEL] = security
        self.__react_sim.input[self.__POPULARITY_LABEL] = popularity
        self.__react_sim.input[self.__FLEXIBILITY_LABEL] = flexibility

        try:
            self.__react_sim.compute()
            return self.__show_results()
        except ValueError as e:
            print(f"Error in simulation computation: {e}")
            return 0

    def __show_results(self) -> float:
        # self.__react.view(sim=self.__react_sim)
        # plt.show()
        # self.__react.view(sim=self.__react_sim)
        # plt.show()
        # self.__vue.view(sim=self.__vue_sim)
        # plt.show()
        print(f'React score: {self.__react_sim.output[self.__REACT_LABEL]}')
        return self.__react_sim.output[self.__REACT_LABEL]





