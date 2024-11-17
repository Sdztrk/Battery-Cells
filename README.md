# Energie-Datenvergleich und Visualisierung

Dieses Projekt wurde auf Wunsch eines Kunden entwickelt, der eine Lösung benötigte, um Energiedaten aus zwei verschiedenen Datenquellen (SQL und MongoDB) zu vergleichen, zu visualisieren und in einem Dashboard darzustellen. Um den Anforderungen gerecht zu werden, habe ich eine DEMO als Beispiel aufgebaut, die zeigt, wie mögliche Diskrepanzen zwischen den Datenquellen identifiziert und die Ergebnisse in einer einheitlichen Übersicht präsentiert werden können.

# Ergebnis
![Overview](./BatteryCells.gif)

## Projektbeschreibung

Die Hauptfunktionalitäten umfassen:

1. **API-Endpunkte**: Zwei separate API-Endpunkte wurden erstellt, um die Daten aus SQL und MongoDB abzurufen.
2. **Tabellarische Darstellung**: Die abgerufenen Daten werden in separaten Tabellen dargestellt.
3. **Visualisierung**: Die Daten werden mithilfe von React-Charts.js-2 in einem Line Chart dargestellt, um Unterschiede schnell zu erkennen.
4. **Skalierbarkeit**: Diese Logik kann auf alle Anlagen angewendet werden und in einem Dashboard übersichtlich dargestellt werden.

---

## Verwendete Technologien

### **Frontend**
- **React.js**: Hauptframework für die Entwicklung der Benutzeroberfläche.
- **Axios**: Für die API-Kommunikation.
- **React-Chartsjs-2**: Zur Visualisierung der Daten in Form von Diagrammen.

### **Backend**
- **Node.js**: Laufzeitumgebung für die serverseitige Logik.
- **Express.js**: Framework zur Erstellung der API-Endpunkte.
- **Mongoose**: Datenbank-ODM zur Kommunikation mit MongoDB.
- **Express-Async-Errors**: Zur besseren Fehlerbehandlung im Backend.

---

## Funktionen

- **Abruf von Energiedaten**: Daten werden parallel aus SQL und MongoDB abgefragt.
- **Darstellung der Daten**: In tabellarischer Form und als Line Chart.
- **Erweiterbarkeit**: Kann für beliebige Anlagen und Datenquellen adaptiert werden.
- **Benutzerfreundliches Dashboard**: Bietet eine übersichtliche Visualisierung aller relevanten Informationen.
