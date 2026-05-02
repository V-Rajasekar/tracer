// ============================================================
// Data Model & Storage Management
// ============================================================

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                 'July', 'August', 'September', 'October', 'November', 'December'];

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const STORAGE_KEY = 'buck2bar_data';

// Initialize default data structure
function initializeData() {
    const data = {
        income: {},
        expenses: {}
    };
    
    MONTHS.forEach(month => {
        // Generate random income between 50 and 4300
        data.income[month] = Math.floor(Math.random() * (4300 - 50 + 1)) + 50;
        data.expenses[month] = 0;
    });
    
    return data;
}

// Load data from localStorage or return default
function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initializeData();
}

// Save data to localStorage (debounced)
let saveTimeout;
function saveData(data) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, 500); // Debounce saves for 500ms
}

// Get current data from input fields
function getCurrentData() {
    const data = initializeData();
    
    MONTHS.forEach(month => {
        const incomeInput = document.getElementById(`income_${month}`);
        const expenseInput = document.getElementById(`expense_${month}`);
        
        if (incomeInput) data.income[month] = parseFloat(incomeInput.value) || 0;
        if (expenseInput) data.expenses[month] = parseFloat(expenseInput.value) || 0;
    });
    
    return data;
}

// Calculate totals
function calculateTotals(data) {
    const totalIncome = Object.values(data.income).reduce((sum, val) => sum + val, 0);
    const totalExpense = Object.values(data.expenses).reduce((sum, val) => sum + val, 0);
    const net = totalIncome - totalExpense;
    
    return { totalIncome, totalExpense, net };
}

// ============================================================
// UI Update Functions
// ============================================================

// Create monthly input rows
function createMonthlyInputs() {
    const container = document.getElementById('monthlyInputs');
    const data = loadData();
    
    // Generate fresh random income if data is not properly initialized
    // (check if more than half the months have 0 income or any expense data exists from old tests)
    const incomeValues = Object.values(data.income);
    const expenseValues = Object.values(data.expenses);
    const zeroIncomeCount = incomeValues.filter(v => v === 0).length;
    const hasExpenses = expenseValues.some(v => v > 0);
    
    if (zeroIncomeCount > 6 || (hasExpenses && zeroIncomeCount > 2)) {
        // Regenerate all income values with random values
        MONTHS.forEach(month => {
            data.income[month] = Math.floor(Math.random() * (4300 - 50 + 1)) + 50;
            data.expenses[month] = 0; // Reset expenses too
        });
        saveData(data);
    }
    
    MONTHS.forEach(month => {
        const monthShort = MONTHS_SHORT[MONTHS.indexOf(month)];
        
        const rowHtml = `
            <div class="month-row">
                <div class="month-label">${monthShort}</div>
                <div>
                    <label for="income_${month}" class="form-label">Income</label>
                    <input type="number" class="form-control" id="income_${month}"
                           placeholder="0.00" step="0.01" min="0"
                           value="${data.income[month] || 0}">
                </div>
                <div>
                    <label for="expense_${month}" class="form-label">Expense</label>
                    <input type="number" class="form-control" id="expense_${month}"
                           placeholder="0.00" step="0.01" min="0"
                           value="${data.expenses[month] || 0}">
                </div>
            </div>
        `;
        
        container.innerHTML += rowHtml;
    });
    
    // Attach event listeners
    attachInputListeners();
    
    // Return the current data state
    return loadData();
}

// Attach event listeners to all input fields
function attachInputListeners() {
    MONTHS.forEach(month => {
        const incomeInput = document.getElementById(`income_${month}`);
        const expenseInput = document.getElementById(`expense_${month}`);
        
        if (incomeInput) {
            incomeInput.addEventListener('input', handleInputChange);
        }
        if (expenseInput) {
            expenseInput.addEventListener('input', handleInputChange);
        }
    });
}

// Handle input change: update totals, save data, update chart
function handleInputChange() {
    const currentData = getCurrentData();
    
    // Update totals display
    updateTotalsDisplay(currentData);
    
    // Save to localStorage
    saveData(currentData);
    
    // Update chart in real-time
    updateChart(currentData);
}

// Update totals display
function updateTotalsDisplay(data) {
    const { totalIncome, totalExpense, net } = calculateTotals(data);
    
    document.getElementById('totalIncomeDisplay').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpenseDisplay').textContent = `$${totalExpense.toFixed(2)}`;
    
    const netDisplay = document.getElementById('netDisplay');
    netDisplay.textContent = `$${net.toFixed(2)}`;
    netDisplay.style.color = net >= 0 ? '#28a745' : '#dc3545';
}

// ============================================================
// Chart Management
// ============================================================

let chartInstance = null;

function updateChart(data) {
    const ctx = document.getElementById('incomeExpenseChart');
    
    if (!ctx) return; // Chart canvas doesn't exist yet
    
    const incomeValues = MONTHS.map(month => data.income[month]);
    const expenseValues = MONTHS.map(month => data.expenses[month]);
    
    if (chartInstance) {
        // Update existing chart
        chartInstance.data.datasets[0].data = incomeValues;
        chartInstance.data.datasets[1].data = expenseValues;
        chartInstance.update();
    } else {
        // Create new chart
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: MONTHS_SHORT,
                datasets: [
                    {
                        label: 'Income',
                        data: incomeValues,
                        backgroundColor: '#28a745',
                        borderColor: '#1e7e34',
                        borderWidth: 1,
                        borderRadius: 4
                    },
                    {
                        label: 'Expenses',
                        data: expenseValues,
                        backgroundColor: '#dc3545',
                        borderColor: '#c82333',
                        borderWidth: 1,
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toFixed(0);
                            }
                        }
                    }
                }
            }
        });
    }
}

// ============================================================
// Download Chart Functionality
// ============================================================

function downloadChartAsPNG() {
    if (!chartInstance) {
        alert('Chart is not yet initialized. Please view the Charts tab first.');
        return;
    }
    
    // Get the current date for the filename
    const now = new Date();
    const dateString = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const fileName = `income-expense-chart-${dateString}.png`;
    
    // Convert chart to image
    const link = document.createElement('a');
    link.href = chartInstance.toBase64Image();
    link.download = fileName;
    link.click();
}

// ============================================================
// Initialization
// ============================================================

window.addEventListener('DOMContentLoaded', function() {
    // Create monthly inputs and get the final data state
    const data = createMonthlyInputs();
    
    // Update totals and chart with the correct data
    updateTotalsDisplay(data);
    updateChart(data);
    
    // Attach download button event listener
    const downloadBtn = document.getElementById('downloadChartBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadChartAsPNG);
    }
    
    // Handle tab switching
    const chartsTab = document.getElementById('charts-tab');
    if (chartsTab) {
        chartsTab.addEventListener('shown.bs.tab', function() {
            if (chartInstance) {
                chartInstance.resize();
            }
        });
    }
});