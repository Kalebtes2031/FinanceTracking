// import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { FinancialRecordForm } from "./financialRecordForm";
import { FinancialRecordList } from "./financialRecordList";

export const Dashboard = () => {
  const { user } = useUser();

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card
        sx={{
          background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '15px',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 700,
              color: '#6a1b9a',
            }}
          >
            Welcome, {user?.firstName}!
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                fontSize: '1.2rem',
                fontFamily: 'Arial, sans-serif',
                color: '#7b1fa2',
              }}
            >
              Here are your finances:
            </Typography>
          </Box>
          <FinancialRecordForm />
          <FinancialRecordList />
        </CardContent>
      </Card>
    </Container>
  );
};
