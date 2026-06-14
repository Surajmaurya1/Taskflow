
const admin = [
 {
    "id": 1,
    "email": "admin@company.com",
    "password": "123"
  }
]


  const employe =  [
    {
      "id": 2,
      "email": "suraj@me.com",
      "password": "123",
      "name": "Suraj",
      "tasks": [
        {
          "id": 1,
          "active": false,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Implement user authentication",
          "description": "Create login and registration system with JWT tokens",
          "date": "2025-09-30",
          "category": "Development"
        },
        {
          "id": 2,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Fix navigation bug",
          "description": "Resolve mobile navigation menu issues",
          "date": "2025-09-25",
          "category": "Bug Fix"
        },
        {
          "id": 3,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Database optimization",
          "description": "Optimize query performance for user dashboard",
          "date": "2025-10-05",
          "category": "Development"
        },
        {
          "id": 4,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "API integration",
          "description": "Integrate third-party payment gateway",
          "date": "2025-09-20",
          "category": "Development"
        },
        {
          "id": 5,
          "active": false,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Code review",
          "description": "Review pull requests for feature branch",
          "date": "2025-10-01",
          "category": "Review"
        },
       
      ]
    },
    {
      "id": 3,
      "email": "udit@company.com",
      "password": "123",
      "name": "Udit",
      "tasks": [
        {
          "id": 6,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Homepage redesign",
          "description": "Create new landing page with modern UI",
          "date": "2025-10-03",
          "category": "Design"
        },
        {
          "id": 7,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Logo design",
          "description": "Design company logo variations",
          "date": "2025-09-22",
          "category": "Design"
        },
        {
          "id": 8,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "User interface mockups",
          "description": "Create mockups for mobile app screens",
          "date": "2025-10-07",
          "category": "Design"
        },
        {
          "id": 9,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Brand guidelines",
          "description": "Develop comprehensive brand style guide",
          "date": "2025-10-10",
          "category": "Design"
        },
        {
          "id": 10,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Icon set creation",
          "description": "Design custom icon set for application",
          "date": "2025-09-18",
          "category": "Design"
        },
        {
          "id": 11,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Print materials",
          "description": "Design business cards and brochures",
          "date": "2025-09-15",
          "category": "Design"
        },
        {
          "id": 12,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Website wireframes",
          "description": "Create wireframes for e-commerce section",
          "date": "2025-10-08",
          "category": "Design"
        }
      ]
    },
    {
      "id": 4,
      "email": "mike@company.com",
      "password": "123",
      "name": "Mike",
      "tasks": [
        {
          "id": 13,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Server deployment",
          "description": "Deploy application to production server",
          "date": "2025-10-02",
          "category": "DevOps"
        },
        {
          "id": 14,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Database backup system",
          "description": "Implement automated daily backups",
          "date": "2025-10-06",
          "category": "DevOps"
        },
        {
          "id": 15,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "SSL certificate renewal",
          "description": "Renew SSL certificates for all domains",
          "date": "2025-09-28",
          "category": "DevOps"
        },
        {
          "id": 16,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Performance monitoring",
          "description": "Set up server monitoring and alerts",
          "date": "2025-10-09",
          "category": "DevOps"
        },
        {
          "id": 17,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Load balancer setup",
          "description": "Configure load balancer for high traffic",
          "date": "2025-09-23",
          "category": "DevOps"
        },
        {
          "id": 18,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Security audit",
          "description": "Conduct comprehensive security review",
          "date": "2025-10-12",
          "category": "Security"
        }
      ]
    },
    {
      "id": 5,
      "email": "arjun@company.com",
      "password": "123",
      "name": "Arjun",
      "tasks": [
        {
          "id": 19,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Content strategy",
          "description": "Develop content marketing strategy for Q4",
          "date": "2025-10-04",
          "category": "Marketing"
        },
        {
          "id": 20,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Social media campaign",
          "description": "Launch product awareness campaign",
          "date": "2025-10-11",
          "category": "Marketing"
        },
        {
          "id": 21,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Blog post series",
          "description": "Write 5 technical blog posts",
          "date": "2025-09-26",
          "category": "Content"
        },
        {
          "id": 22,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Email newsletter",
          "description": "Design monthly newsletter template",
          "date": "2025-10-15",
          "category": "Marketing"
        },
        {
          "id": 23,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "SEO optimization",
          "description": "Optimize website for search engines",
          "date": "2025-09-21",
          "category": "Marketing"
        },
        {
          "id": 24,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Influencer outreach",
          "description": "Contact industry influencers for partnerships",
          "date": "2025-09-19",
          "category": "Marketing"
        },
        {
          "id": 25,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Analytics setup",
          "description": "Configure Google Analytics 4 tracking",
          "date": "2025-10-08",
          "category": "Analytics"
        },
        {
          "id": 26,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Competitor analysis",
          "description": "Research competitor marketing strategies",
          "date": "2025-10-13",
          "category": "Research"
        }
      ]
    },
    {
      "id": 6,
      "email": "vikash@company.com",
      "password": "123",
      "name": "Vikash",
      "tasks": [
        {
          "id": 27,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Unit testing",
          "description": "Write comprehensive unit tests for API",
          "date": "2025-10-05",
          "category": "Testing"
        },
        {
          "id": 28,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Bug verification",
          "description": "Verify and document reported bugs",
          "date": "2025-10-07",
          "category": "QA"
        },
        {
          "id": 29,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Test automation",
          "description": "Set up automated regression testing",
          "date": "2025-09-24",
          "category": "Testing"
        },
        {
          "id": 30,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "Performance testing",
          "description": "Conduct load testing on new features",
          "date": "2025-10-14",
          "category": "Testing"
        },
        {
          "id": 31,
          "active": false,
          "newTask": false,
          "complete": false,
          "failed": true,
          "taskTitle": "Mobile testing",
          "description": "Test application on various mobile devices",
          "date": "2025-09-17",
          "category": "Testing"
        },
        {
          "id": 32,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Security testing",
          "description": "Perform security vulnerability assessment",
          "date": "2025-10-16",
          "category": "Security"
        },
        {
          "id": 33,
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false,
          "taskTitle": "Documentation review",
          "description": "Review and update testing documentation",
          "date": "2025-09-20",
          "category": "Documentation"
        },
        {
          "id": 34,
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false,
          "taskTitle": "User acceptance testing",
          "description": "Coordinate UAT with stakeholders",
          "date": "2025-10-18",
          "category": "Testing"
        },
        {
          "id": 35,
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false,
          "taskTitle": "Integration testing",
          "description": "Test API integrations with third-party services",
          "date": "2025-10-12",
          "category": "Testing"
        }
      ]
    }
  ]

  

export const setLocalStorage = (employeData, adminData) => {
    localStorage.setItem("employe", JSON.stringify(employeData));
    localStorage.setItem("admin", JSON.stringify(adminData));
    window.dispatchEvent(new Event('localStorageUpdated'));
}

export const updateEmployees = (updatedEmployees) => {
  localStorage.setItem("employe", JSON.stringify(updatedEmployees));
  window.dispatchEvent(new Event('localStorageUpdated'));
};

export const addTaskToEmployee = (employeename, newTask) => {
  const employees = JSON.parse(localStorage.getItem("employe")) || [];
  
  const updatedEmployees = employees.map(emp => {
    if (emp.name === employeename) {
      return {
        ...emp,
        tasks: [...(emp.tasks || []), newTask]
      };
    }
    return emp;
  });
  
  updateEmployees(updatedEmployees);
  return updatedEmployees;
};

export const markTaskAsComplete = (employeeName, taskId) => {
  const employees = JSON.parse(localStorage.getItem("employe")) || [];

  const updatedEmployees = employees.map(emp => {
    if (emp.name === employeeName) {
      return {
        ...emp,
        tasks: emp.tasks.filter(task => task.id !== taskId)
      };
    }
    return emp;
  });

  updateEmployees(updatedEmployees);
  return updatedEmployees;
};

export const getLocalStorage = () => {
    try {
        const employe = localStorage.getItem("employe");
        const admin = localStorage.getItem("admin");
        
        const parsedEmploye = (employe && employe !== "undefined") ? JSON.parse(employe) : null;
        const parsedAdmin = (admin && admin !== "undefined") ? JSON.parse(admin) : null;
        
        return {
            employe: parsedEmploye,
            admin: parsedAdmin
        };
    } catch (error) {
        console.error('Error parsing localStorage data:', error);
        return { employe: null, admin: null };
    }
}

// Seed initial data if not present
if (!localStorage.getItem("employe") || !localStorage.getItem("admin")) {
  setLocalStorage(employe, admin);
}
