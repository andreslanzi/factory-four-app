import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";
import Loader from "./Loader";
import moment from "moment";

const Dashboard = () => {
  const [apiFetched, setApiFetched] = useState(false);
  const [dataFetched, setDataFetched] = useState({
    accounts: {},
    assets: {},
    customers: {},
    datapoints: {},
    devices: {},
    documents: {},
    forms: {},
    invites: {},
    media: {},
    messages: {},
    namespaces: {},
    orders: {},
    patients: {},
    relationships: {},
    rules: {},
    templates: {},
    users: {},
    workflows: {},
  });

  /// INTERVAL TO FETCH DATA (IN MILLISECONDS)
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  /// API FETCHED AND DATA STORED
  const fetchData = () => {
    axios
      .get("https://api.factoryfour.com/accounts/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, accounts: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            accounts: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/assets/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, assets: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            assets: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/customers/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, customers: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            customers: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/datapoints/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, datapoints: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            datapoints: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/devices/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, devices: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            devices: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/documents/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, documents: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            documents: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/forms/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, forms: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            forms: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status"
      )
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, invites: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            invites: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/media/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, media: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            media: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status"
      )
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, messages: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            messages: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/namespaces/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, namespaces: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            namespaces: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/orders/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, orders: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            orders: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/patients/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, patients: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            patients: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/relationships/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, relationships: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            relationships: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/rules/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, rules: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            rules: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/templates/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, templates: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            templates: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status"
      )
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, users: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            users: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });
    axios
      .get("https://api.factoryfour.com/workflows/health/status")
      .then((res) => {
        let data = res.data;
        setDataFetched((previousState) => {
          return { ...previousState, workflows: data };
        });
      })
      .catch((error) => {
        setDataFetched((previousState) => {
          return {
            ...previousState,
            workflows: {
              success: false,
              hostname: "403",
              message: "ERROR",
              time: "TIMED OUT",
            },
          };
        });
      });

    setApiFetched(true);
  };

  /// TIME FORMATTER FROM UNIX TIMESTAMP
  const unixTime = (number) => {
    let date = moment(number);
    return date.format("h:mm:ss");
  };

  if (!apiFetched) return <Loader />;

  return (
    <Row gutter={[32, 32]} className="card-container">
      {Object.keys(dataFetched).map((key) => (
        <Col xs={12} sm={8} lg={4} className="card">
          <Card
            title={key.toUpperCase()}
            size="small"
            bodyStyle={
              dataFetched[key].success
                ? {
                    textAlign: "center",
                    color: "black",
                  }
                : dataFetched[key]?.hostname === "403"
                ? { textAlign: "center", color: "red" }
                : {
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                  }
            }
            headStyle={
              dataFetched[key].success
                ? {
                    backgroundColor: "green",
                    color: "white",
                    textAlign: "center",
                  }
                : dataFetched[key]?.hostname === "403"
                ? {
                    backgroundColor: "red",
                    color: "black",
                    textAlign: "center",
                  }
                : {
                    textAlign: "center",
                  }
            }
            hoverable
          >
            {dataFetched[key]?.success ? (
              <div className="card-content">
                <span>HOSTNAME</span>
                <p key={Math.random()} className="fade-in">
                  {dataFetched[key]?.hostname}
                </p>
                <span>MESSAGE</span>
                <p key={Math.random()} className="fade-in">
                  {dataFetched[key]?.message}
                </p>
                <span>TIME</span>
                <p key={Math.random()} className="fade-in">
                  {unixTime(dataFetched[key]?.time)}
                </p>
              </div>
            ) : dataFetched[key]?.hostname === "403" ? (
              <div className="card-content">
                <div className="error-message">
                  <span>OUTAGE</span>
                  <p key={Math.random()} className="fade-in">
                    403 - FORBIDDEN
                  </p>
                  <span>MESSAGE</span>
                  <p key={Math.random()} className="fade-in">
                    {dataFetched[key]?.message}
                  </p>
                </div>
              </div>
            ) : (
              <Loader />
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
