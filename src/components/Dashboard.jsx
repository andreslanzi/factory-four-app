import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import Loader from "./Loader";
import moment from "moment";
import { endpoints } from "../services/endpoints";

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

  /// Set inverval to fetch data (milliseconds)
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  /// Api calls , data fetched and stored
  const fetchData = () => {
    endpoints.getAccounts
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
    endpoints.getAssets
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
    endpoints.getCustomers
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
    endpoints.getDatapoints
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
    endpoints.getDevices
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
    endpoints.getDocuments
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
    endpoints.getForms
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
    endpoints.getInvites
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
    endpoints.getMedia
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
    endpoints.getMessages
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
    endpoints.getNamespaces
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
    endpoints.getOrders
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
    endpoints.getPatients
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
    endpoints.getRelationships
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
    endpoints.getRules
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
    endpoints.getTemplates
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
    endpoints.getUsers
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
    endpoints.getWorkflows
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

  /// Time formatter for unix timestamp
  const unixTime = (number) => {
    let date = moment(number);
    return date.format("h:mm:ss");
  };

  if (!apiFetched) return <Loader />;

  return (
    <Row gutter={[24, 24]} className="card-container">
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
                : { textAlign: "center", color: "red" }
            }
            headStyle={
              dataFetched[key].success
                ? {
                    backgroundColor: "green",
                    color: "white",
                    textAlign: "center",
                  }
                : {
                    backgroundColor: "red",
                    color: "black",
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
            ) : (
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
            )}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
