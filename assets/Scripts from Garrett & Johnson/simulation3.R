nsims=1
bias_values = numeric(length=nsims)
nepochs = 500
hist_new_bias = numeric(length=nepochs)

layout(matrix(c(1,2,3,4,5,6),2,3,byrow=T))
bias = 6
tokens = 1000
bias_prop = 0.1
soc_prop=0.5

for(sim in 1:nsims) {
phon <- c(rnorm(tokens*(1-bias_prop)), rnorm(tokens*bias_prop,mean=bias))
soc <- c(rnorm(tokens*(1-soc_prop)), rnorm(tokens*(soc_prop),mean=6))

hist(phon,xlab="Phonetic output (with a bias factor)",ylab="Number of instances",main="Phonetic distribution")
hist(soc,xlab="Social group identity",main="Population distribution")

phon=sample(phon)  # randomize the order
soc=sample(soc)

plot(phon,soc,xlab="Phonetic output", ylab="Social identity", main="Bivariate random selection")

for(j in 0:nepochs) {
	zero_count=0
	total=0
	# we assume that all tokens, biased or not define minority category
	# Majority category remains unchanged - bias is not used to recompute it
	for (i in 1:tokens) {
		if (soc[i]>3 && phon[i]<3) {zero_count=zero_count+1}
		if (soc[i]>3) {total=total+1}
	}
	# for frequency matching we now calculate the new bias proportion
	new_bias_prop = max(1-(zero_count/total),bias_prop) 
	# keep an array over the epochs
	hist_new_bias[j]=new_bias_prop
	
	# for gradual drift of target take the mean of each group
	ave <- mean(phon[soc>3])
	ave2 <- mean(phon[soc<3])
	input2 <- c(
		rnorm(tokens*(1-new_bias_prop)), 		rnorm(tokens*new_bias_prop,mean=bias))
	input1 <- c(
		rnorm(tokens*(1-bias_prop)), rnorm(tokens*bias_prop,mean=bias))
	print(paste("j =",j,"new_bias =",new_bias_prop))

	for(i in 1:tokens) {
		if(soc[i]>3) {  # accept errors in minority cloud
			phon[i]=sample(input2,1)
		} else phon[i]=sample(input1,1)
	}

	if (j%%(nepochs/2)==0) {
		mytitle<-paste("Cycle number",j)
		plot(phon,soc,xlab="Phonetic output",ylab="Social identity", main=mytitle)
	}
}	

bias_values[sim]=new_bias_prop;
}