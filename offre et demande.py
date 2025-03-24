import numpy as np
import plotly.graph_objects as go
from ipywidgets import interact

# Fonction pour tracer les courbes
@interact(a_d=(0.1, 2.0, 0.1), b_d=(0, 50, 5), a_o=(0.1, 2.0, 0.1), b_o=(0, 50, 5))
def plot_supply_demand(a_d=1.0, b_d=30, a_o=1.0, b_o=10):
    q = np.linspace(0, 100, 100)
    demande = b_d - a_d * q  # Courbe de demande (décroissante)
    offre = b_o + a_o * q  # Courbe d'offre (croissante)
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=q, y=demande, mode='lines', name='Demande', line=dict(color='blue')))
    fig.add_trace(go.Scatter(x=q, y=offre, mode='lines', name='Offre', line=dict(color='red')))
    
    # Point d'équilibre (approximation)
    eq_q = (b_d - b_o) / (a_o + a_d)
    eq_p = b_o + a_o * eq_q
    fig.add_trace(go.Scatter(x=[eq_q], y=[eq_p], mode='markers', name='Équilibre', marker=dict(color='green', size=10)))
    
    fig.update_layout(title='Courbes d'Offre et de Demande',
                      xaxis_title='Quantité',
                      yaxis_title='Prix',
                      xaxis=dict(range=[0, 100]),
                      yaxis=dict(range=[0, max(b_d, b_o) + 20]))
    fig.show()
